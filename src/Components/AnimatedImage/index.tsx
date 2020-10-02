import React from 'react';
import {Animated, ImageProps} from 'react-native';
import {normalize} from '@Plugins/Device';

interface AnimatedImageProps {
  source: ImageProps;
}

const AnimatedImage: React.FunctionComponent<AnimatedImageProps> = ({
  source,
}): JSX.Element => {
  const translateX = new Animated.Value(0.6);

  Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0.6,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Animated.Image
      source={source}
      resizeMode="contain"
      style={{
        width: normalize(350),
        height: normalize(350),
        transform: [{scale: translateX}],
      }}
    />
  );
};

export default AnimatedImage;
