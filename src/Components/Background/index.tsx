import React, {ReactElement} from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import _style from './style';

interface BackgroundProps {
  children?: ReactElement | ReactElement[];
  style?: ViewStyle | ViewStyle[];
}

const Background: React.FunctionComponent<BackgroundProps> = ({
  children,
  style = {},
}): JSX.Element => {
  return (
    <SafeAreaView style={[_style.container, style]}>{children}</SafeAreaView>
  );
};

export default Background;
