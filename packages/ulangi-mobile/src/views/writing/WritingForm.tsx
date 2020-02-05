/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ButtonSize, Theme } from '@ulangi/ulangi-common/enums';
import { ObservableWritingFormState } from '@ulangi/ulangi-observable';
import * as _ from 'lodash';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ScrollView, TextInput, View, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { config } from '../../constants/config';
import { WritingFormIds } from '../../constants/ids/WritingFormIds';
import { FullRoundedButtonStyle } from '../../styles/FullRoundedButtonStyle';
import { DefaultButton } from '../common/DefaultButton';
import { DefaultText } from '../common/DefaultText';
import { DefinitionItem } from '../vocabulary/DefinitionItem';
import {
  WritingFormStyles,
  darkStyles,
  definitionItemDarkStyles,
  definitionItemLightStyles,
  lightStyles,
} from './WritingForm.style';

export interface WritingFormProps {
  theme: Theme;
  writingFormState: ObservableWritingFormState;
  setAnswer: (text: string) => void;
  showHint: () => void;
  next: () => void;
  styles?: {
    light: WritingFormStyles;
    dark: WritingFormStyles;
  };
}

@observer
export class WritingForm extends React.Component<WritingFormProps> {
  private animationContainerRef?: any;
  private textInputRef?: any;
  private unsubscribeAnimation?: () => void;
  private unsubscribeAutoFocus?: () => void;

  public componentDidMount(): void {
    this.unsubscribeAnimation = autorun(
      (): void => {
        if (
          this.props.writingFormState.shouldRunFadeOutAnimation === true &&
          this.animationContainerRef
        ) {
          this.animationContainerRef.fadeOutDown(200).then(
            (): void => {
              this.props.writingFormState.shouldRunFadeOutAnimation = false;
            },
          );
        }
      },
    );

    this.unsubscribeAutoFocus = autorun(
      (): void => {
        if (
          this.props.writingFormState.shouldAutoFocus === true &&
          this.textInputRef
        ) {
          _.delay(this.textInputRef.focus, 500);
        }
      },
    );
  }

  public componentWillUnmount(): void {
    if (this.unsubscribeAnimation) {
      this.unsubscribeAnimation();
    }
    if (this.unsubscribeAutoFocus) {
      this.unsubscribeAutoFocus();
    }
  }

  public get styles(): WritingFormStyles {
    const light = this.props.styles ? this.props.styles.light : lightStyles;
    const dark = this.props.styles ? this.props.styles.dark : darkStyles;
    return this.props.theme === Theme.LIGHT ? light : dark;
  }

  public render(): React.ReactElement<any> {
    const definition = this.props.writingFormState.currentQuestion
      .givenDefinition;
    return (
      <Animatable.View
        style={this.styles.container}
        ref={(ref: any): void => {
          this.animationContainerRef = ref;
        }}
        animation="fadeInUp"
        duration={config.general.animationDuration}
        useNativeDriver={true}>
        <View style={this.styles.row}>
          <DefaultText style={this.styles.label}>GIVEN DEFINITION:</DefaultText>
          <View style={this.styles.definition_container}>
            <DefinitionItem
              index={0}
              theme={this.props.theme}
              definition={definition}
              hideFields={['example']}
              styles={{
                light: definitionItemLightStyles,
                dark: definitionItemDarkStyles,
              }}
            />
          </View>
        </View>
        <View style={this.styles.row}>
          <DefaultText style={this.styles.label}>WRITE THE TERM:</DefaultText>
          <View style={this.styles.answer_container}>
            <View style={this.styles.answer}>
              <TextInput
                ref={(ref: any): void => {
                  this.textInputRef = ref;
                }}
                testID={WritingFormIds.ANSWER_INPUT}
                // We need key otherwise textInput does not update on skip/next
                key={this.props.writingFormState.currentQuestion.questionId}
                editable={!this.props.writingFormState.isCurrentAnswerCorrect}
                style={this.styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={this.props.writingFormState.currentAnswer}
                onChangeText={this.props.setAnswer}
              />
              <View
                testID={
                  this.props.writingFormState.isCurrentAnswerCorrect
                    ? WritingFormIds.ANSWER_IS_CORRECT
                    : this.props.writingFormState
                        .isCurrentAnswerPartiallyCorrect
                    ? WritingFormIds.ANSWER_IS_PARTIALLY_CORRECT
                    : WritingFormIds.ANSWER_IS_INCORRECT
                }
                style={[
                  this.styles.underline,
                  this.getUnderlineColorForAnswer(),
                ]}
              />
            </View>
            {this.props.writingFormState.nextButtonType !== null ? (
              <View style={this.styles.button_container}>
                <DefaultButton
                  testID={WritingFormIds.NEXT_BTN}
                  text={this.props.writingFormState.nextButtonType}
                  styles={FullRoundedButtonStyle.getFullGreenBackgroundStyles(
                    ButtonSize.SMALL,
                  )}
                  onPress={this.props.next}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View style={this.styles.row}>
          <DefaultText style={this.styles.label}>HINT:</DefaultText>
          <View style={this.styles.hint_container}>
            <View style={this.styles.hint_text_container}>
              <ScrollView
                horizontal={true}
                bounces={false}
                contentContainerStyle={this.styles.hint_scrollview}
                showsHorizontalScrollIndicator={false}>
                <DefaultText
                  testID={WritingFormIds.HINT_TEXT}
                  numberOfLines={1}
                  style={this.styles.hint_text}>
                  {this.props.writingFormState.currentHint}
                </DefaultText>
              </ScrollView>
              <View style={this.styles.underline} />
            </View>
            <View style={this.styles.button_container}>
              <DefaultButton
                testID={WritingFormIds.HINT_BTN}
                text="Show"
                styles={FullRoundedButtonStyle.getFullGreyBackgroundStyles(
                  ButtonSize.SMALL,
                )}
                onPress={this.props.showHint}
              />
            </View>
          </View>
        </View>
      </Animatable.View>
    );
  }

  private getUnderlineColorForAnswer(): ViewStyle {
    if (this.props.writingFormState.isCurrentAnswerCorrect === true) {
      return {
        backgroundColor: '#4EBA6F',
      };
    } else if (
      this.props.writingFormState.isCurrentAnswerPartiallyCorrect === false
    ) {
      return {
        backgroundColor: '#F15A5A',
      };
    } else {
      return {
        backgroundColor:
          this.props.theme === Theme.LIGHT
            ? config.styles.light.primaryTextColor
            : config.styles.dark.primaryTextColor,
      };
    }
  }
}
