/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ScreenName } from '@ulangi/ulangi-common/enums';
import { observable } from 'mobx';

import { ObservableScreen } from '../screen/ObservableScreen';
import { ObservableTitleTopBar } from '../top-bar/ObservableTitleTopBar';

export class ObservableWritingSettingsScreen extends ObservableScreen {
  @observable
  public selectedInitialInterval: number;

  @observable
  public selectedLimit: number;

  @observable
  public selectedFeedbackButtons: 3 | 4 | 5;

  public constructor(
    selectedInitialInterval: number,
    selectedLimit: number,
    selectedFeedbackButtons: 3 | 4 | 5,
    screenName: ScreenName,
    topBar: ObservableTitleTopBar
  ) {
    super(screenName, topBar);
    this.selectedInitialInterval = selectedInitialInterval;
    this.selectedLimit = selectedLimit;
    this.selectedFeedbackButtons = selectedFeedbackButtons;
  }
}
