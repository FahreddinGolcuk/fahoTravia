import React from 'react';
import {FlexStyle, Text, TouchableOpacity} from 'react-native';
import {Colors} from '@Theme/index';
import _style from './style';

interface ButtonProps {
  title: string;
  onPress: () => void;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  backgroundColor?: string;
  disable?: boolean;
  style?: FlexStyle | FlexStyle[];
}

const Button: React.FunctionComponent<ButtonProps> = ({
  size = 'medium',
  backgroundColor = Colors.danger,
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
        {backgroundColor: backgroundColor},
      ]}
      disabled={disable}
      onPress={onPress}>
      <Text style={_style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
