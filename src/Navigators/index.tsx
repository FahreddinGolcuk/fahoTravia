import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GameScreen,
  CorrectAnswerScreen,
  WrongAnswerScreen,
  SplashScreen,
  ChoiceScreen,
  GameStartSplashScreen,
} from '@Containers/index';
import {isReadyRef, navigationRef} from '@Plugins/NavigationHelper';

const Stack = createStackNavigator();

const Navigators = () => {
  React.useEffect(() => {
    return () => {
      // @ts-ignore
      isReadyRef.current! = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Choice" component={ChoiceScreen} />
        <Stack.Screen name="StartSplash" component={GameStartSplashScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Wrong" component={WrongAnswerScreen} />
        <Stack.Screen name="Correct" component={CorrectAnswerScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
