/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { Theme } from '@ulangi/ulangi-common/enums';
import { ObservableReviewActionBarState } from '@ulangi/ulangi-observable';
import * as _ from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';

import { DefaultText } from '../common/DefaultText';
import { SmartScrollView } from '../common/SmartScrollView';
import {
  ReviewActionBarStyles,
  darkStyles,
  lightStyles,
} from './ReviewActionBar.style';

export interface ReviewActionBarProps {
  theme: Theme;
  reviewActionBarState: ObservableReviewActionBarState;
  styles?: {
    light: ReviewActionBarStyles;
    dark: ReviewActionBarStyles;
  };
}

@observer
export class ReviewActionBar extends React.Component<ReviewActionBarProps> {
  public get styles(): ReviewActionBarStyles {
    const light = this.props.styles ? this.props.styles.light : lightStyles;
    const dark = this.props.styles ? this.props.styles.dark : darkStyles;
    return this.props.theme === Theme.LIGHT ? light : dark;
  }

  public render(): React.ReactElement<any> {
    return (
      <SmartScrollView
        pagingEnabled={false}
        horizontal={true}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {this.props.reviewActionBarState.buttons.map(
          (button): React.ReactElement<any> => {
            const disabledStyle = button.disabled ? { opacity: 0.3 } : {};
            return (
              <TouchableOpacity
                key={button.testID}
                testID={button.testID}
                style={[this.styles.action_btn, disabledStyle]}
                onPress={button.onPress}
                disabled={button.disabled}>
                <View style={this.styles.icon_container}>
                  {button.loading === true ? (
                    <ActivityIndicator size="small" />
                  ) : (
                    <Image
                      source={
                        this.props.theme === Theme.LIGHT
                          ? button.icon.light
                          : button.icon.dark
                      }
                    />
                  )}
                </View>
                <View style={this.styles.title_container}>
                  <DefaultText style={this.styles.action_title}>
                    {button.title}
                  </DefaultText>
                  {!_.isEmpty(button.subtitle) ? (
                    <DefaultText
                      style={this.styles.action_subtitle}
                      numberOfLines={1}
                      ellipsizeMode="middle">
                      {button.subtitle}
                    </DefaultText>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </SmartScrollView>
    );
  }
}
