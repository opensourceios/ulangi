/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { Options } from '@ulangi/react-native-navigation';
import { ActivityState, ScreenName, Theme } from '@ulangi/ulangi-common/enums';
import {
  ObservableFeedbackListState,
  ObservableReviewFeedbackBarState,
  ObservableTitleTopBar,
  ObservableTopBarButton,
  ObservableVocabulary,
  ObservableWritingFormState,
  ObservableWritingLessonScreen,
  ObservableWritingResult,
} from '@ulangi/ulangi-observable';
import { ObservableMap, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Container, ContainerPassedProps } from '../../Container';
import { Images } from '../../constants/Images';
import { config } from '../../constants/config';
import { WritingLessonScreenIds } from '../../constants/ids/WritingLessonScreenIds';
import { WritingLessonScreenFactory } from '../../factories/writing/WritingLessonScreenFactory';
import { WritingQuestionIterator } from '../../iterators/WritingQuestionIterator';
import { WritingLessonScreen } from './WritingLessonScreen';
import { WritingLessonScreenStyle } from './WritingLessonScreenContainer.style';

export interface WritingLessonScreenPassedProps {
  readonly vocabularyList: ObservableMap<string, ObservableVocabulary>;
  readonly startLesson: () => void;
}

@observer
export class WritingLessonScreenContainer extends Container<
  WritingLessonScreenPassedProps
> {
  public static options(props: ContainerPassedProps): Options {
    return props.theme === Theme.LIGHT
      ? WritingLessonScreenStyle.SCREEN_FULL_LIGHT_STYLES
      : WritingLessonScreenStyle.SCREEN_FULL_DARK_STYLES;
  }

  private screenFactory = new WritingLessonScreenFactory(
    this.props,
    this.eventBus,
    this.observer,
  );

  private questionIterator = new WritingQuestionIterator(
    this.props.passedProps.vocabularyList,
  );

  private writingSettingsDelegate = this.screenFactory.createWritingSettingsDelegate();

  private currentSettings = this.writingSettingsDelegate.getCurrentSettings();

  protected observableScreen = new ObservableWritingLessonScreen(
    this.props.passedProps.vocabularyList,
    new ObservableWritingFormState(
      true,
      null,
      this.questionIterator.next(),
      '',
      '',
      0,
      this.questionIterator.getNumberOfQuestions(),
      0,
      false,
    ),
    new ObservableWritingResult(
      config.writing.gradeScale,
      observable.array([]),
      observable.array([]),
      observable.array([]),
      observable.array([]),
    ),
    new ObservableFeedbackListState(observable.map()),
    new ObservableReviewFeedbackBarState(observable.map(), null),
    observable.box(this.currentSettings.feedbackButtons),
    observable.box(false),
    observable.box(false),
    observable.box(ActivityState.INACTIVE),
    ScreenName.WRITING_LESSON_SCREEN,
    new ObservableTitleTopBar(
      'Writing',
      new ObservableTopBarButton(
        WritingLessonScreenIds.BACK_BTN,
        null,
        {
          light: Images.ARROW_LEFT_BLACK_22X22,
          dark: Images.ARROW_LEFT_MILK_22X22,
        },
        (): void => {
          this.screenDelegate.quit();
        },
      ),
      null,
    ),
  );

  protected navigatorDelegate = this.screenFactory.createNavigatorDelegate();

  protected screenDelegate = this.screenFactory.createScreenDelegate(
    this.observableScreen,
    this.questionIterator,
    this.props.passedProps.startLesson,
  );

  protected onThemeChanged(theme: Theme): void {
    this.navigatorDelegate.mergeOptions(
      theme === Theme.LIGHT
        ? WritingLessonScreenStyle.SCREEN_LIGHT_STYLES_ONLY
        : WritingLessonScreenStyle.SCREEN_DARK_STYLES_ONLY,
    );
  }

  public componentDidMount(): void {
    this.screenDelegate.autoDisablePopGestureWhenAdRequiredToShow();
    this.screenDelegate.addBackButtonHandler(
      this.screenDelegate.handleBackButton,
    );

    if (this.screenDelegate.shouldLoadAd()) {
      this.screenDelegate.loadAd();
    }
  }

  public componentWillUnmount(): void {
    this.screenDelegate.removeBackButtonHandler(
      this.screenDelegate.handleBackButton,
    );
  }

  public render(): React.ReactElement<any> {
    return (
      <WritingLessonScreen
        themeStore={this.props.rootStore.themeStore}
        observableScreen={this.observableScreen}
        screenDelegate={this.screenDelegate}
      />
    );
  }
}
