/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { assertExists } from '@ulangi/assert';
import { SQLiteDatabase } from '@ulangi/sqlite-adapter';
import { ActionType, createAction } from '@ulangi/ulangi-action';
import { SyncTask } from '@ulangi/ulangi-common/enums';
import { GetFirebaseTokenRequest } from '@ulangi/ulangi-common/interfaces';
import { GetFirebaseTokenResponseResolver } from '@ulangi/ulangi-common/resolvers';
import { SessionModel } from '@ulangi/ulangi-local-database';
import axios, { AxiosResponse } from 'axios';
import * as _ from 'lodash';
import { EventChannel } from 'redux-saga';
import { call, cancelled, fork, put, take } from 'redux-saga/effects';
import { PromiseType } from 'utility-types';

import { FirebaseAdapter } from '../adapters/FirebaseAdapter';
import { FirebaseEventChannel } from '../channels/FirebaseEventChannel';
import { errorConverter } from '../converters/ErrorConverter';
import { SagaEnv } from '../interfaces/SagaEnv';
import { createRequest } from '../utils/createRequest';
import { ProtectedSaga } from './ProtectedSaga';

export class ObserveRemoteUpdateSaga extends ProtectedSaga {
  private getFirebaseTokenResponseResolver = new GetFirebaseTokenResponseResolver();

  private sharedDb: SQLiteDatabase;
  private sessionModel: SessionModel;
  private firebase: FirebaseAdapter;

  public constructor(
    sharedDb: SQLiteDatabase,
    sessionModel: SessionModel,
    firebase: FirebaseAdapter
  ) {
    super();
    this.sharedDb = sharedDb;
    this.sessionModel = sessionModel;
    this.firebase = firebase;
  }

  public *run(env: SagaEnv): IterableIterator<any> {
    yield fork([this, this.allowObserveRemoteUpdatesForSyncing], env.API_URL);
  }

  public *allowObserveRemoteUpdatesForSyncing(
    apiUrl: string
  ): IterableIterator<any> {
    let channel!: EventChannel<any>;
    try {
      yield take(ActionType.SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING);

      const accessToken: PromiseType<
        ReturnType<SessionModel['getAccessToken']>
      > = yield call([this.sessionModel, 'getAccessToken'], this.sharedDb);

      const userId: PromiseType<
        ReturnType<SessionModel['getUserId']>
      > = yield call([this.sessionModel, 'getUserId'], this.sharedDb);

      const response: AxiosResponse<any> = yield call(
        [axios, 'request'],
        createRequest<GetFirebaseTokenRequest>(
          'get',
          apiUrl,
          '/get-firebase-token',
          null,
          null,
          { accessToken: assertExists(accessToken) }
        )
      );

      const { firebaseToken } = this.getFirebaseTokenResponseResolver.resolve(
        response.data,
        true
      );
      yield call([this.firebase, 'signInWithCustomToken'], firebaseToken);

      channel = new FirebaseEventChannel(this.firebase).createChannelByPaths([
        `users/${userId}/userLatestSyncTime`,
        `users/${userId}/setLatestSyncTime`,
        `users/${userId}/vocabularyLatestSyncTime`,
      ]);

      yield put(
        createAction(
          ActionType.SYNC__OBSERVING_REMOTE_UPDATES_FOR_SYNCING,
          null
        )
      );

      while (true) {
        const payload = yield take(channel);
        if (_.has(payload, `users/${userId}/userLatestSyncTime`)) {
          yield put(
            createAction(ActionType.SYNC__ADD_SYNC_TASK, {
              syncTask: SyncTask.DOWNLOAD_USER,
            })
          );
        } else if (_.has(payload, `users/${userId}/setLatestSyncTime`)) {
          yield put(
            createAction(ActionType.SYNC__ADD_SYNC_TASK, {
              syncTask: SyncTask.DOWNLOAD_SETS,
            })
          );
        } else if (_.has(payload, `users/${userId}/vocabularyLatestSyncTime`)) {
          yield put(
            createAction(ActionType.SYNC__ADD_SYNC_TASK, {
              syncTask: SyncTask.DOWNLOAD_VOCABULARY,
            })
          );
        }
      }
    } catch (error) {
      yield put(
        createAction(
          ActionType.SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING_FAILED,
          {
            errorCode: errorConverter.getErrorCode(error),
            error,
          }
        )
      );
    } finally {
      if (yield cancelled() && typeof channel !== 'undefined') {
        channel.close();
        yield call([this.firebase, 'signOut']);
      }
    }
  }
}
