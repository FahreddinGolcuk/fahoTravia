import React, {useEffect} from 'react';
import {Text, Animated} from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Background} from '@Components/index';
import {Colors, Helpers} from '@Theme/index';
import {deviceWidth, normalize} from '@Utils/Device';
import {getData} from '@Utils/Storage';
import {useDispatch} from 'react-redux';
import {setHighScore} from '@Stores/Question/Actions';

const SplashScreen: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(async () => {
      const highScore = (await getData('@score')) || 0;
      dispatch(setHighScore({highScore}));
      NavigationHelper.navigate('Choice');
    }, 4000);
  }, [dispatch]);
  const translateX = new Animated.Value(0);
  const scale = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 45,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  Animated.loop(
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Background style={[Helpers.center, {backgroundColor: Colors.dark}]}>
      <Animated.View
        style={{
          transform: [{translateX: translateX}],
          width: deviceWidth() / 3,
          height: 16,
          backgroundColor: Colors.danger,
          shadowColor: Colors.danger,
          borderRadius: 16,
          shadowOffset: {
            width: 5,
            height: 6,
          },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 16,
        }}
      />
      <Text
        style={{
          color: Colors.primary,
          fontSize: normalize(32),
          fontWeight: 'bold',
        }}>
        Queasy
      </Text>
      <Animated.View
        style={{
          transform: [{scaleX: scale}],
          width: deviceWidth() / 3,
          height: 16,
          backgroundColor: Colors.fourth,
          shadowColor: Colors.fourth,
          shadowOffset: {
            width: 5,
            height: 6,
          },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 16,
        }}
      />
    </Background>
  );
};

export default SplashScreen;
