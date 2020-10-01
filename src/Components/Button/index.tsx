import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '@Theme/index';
import _style from './style';

interface ButtonProps {
  title: string;
  titleColor?: string;
  onPress: () => void;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  backgroundColor?: string;
  disable?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const Button: React.FunctionComponent<ButtonProps> = ({
  size = 'medium',
  backgroundColor = Colors.danger,
  titleColor = Colors.primary,
  title,
  onPress,
  disable = false,
  style = {},
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        _style.container,
        _style[size],
        style,
        {backgroundColor: !disable ? backgroundColor : 'grey'},
      ]}
      disabled={disable}
      onPress={onPress}>
      <Text style={[_style.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
