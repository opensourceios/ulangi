/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ScreenName } from '@ulangi/ulangi-common/enums';
import { observable } from 'mobx';

import { ObservableScreen } from '../screen/ObservableScreen';

export class ObservableChangeEmailScreen extends ObservableScreen {
  @observable
  public email: string;

  @observable
  public password: string;

  public constructor(email: string, password: string, screenName: ScreenName) {
    super(screenName);
    this.email = email;
    this.password = password;
  }
}