import React from 'react';
import {CommonActions} from '@react-navigation/native';
export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

const NavigationHelper = {
  navigate(name: string, params?: object) {
    if (isReadyRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      // @ts-ignore
      navigationRef.current.navigate(name, params);
    } else {
      //TODO MAYBE IT CAN ADD SOME CODES.
    }
  },
  navigateAndReset(name: string, params?: object) {
    // @ts-ignore
    navigationRef.current.navigate(
      CommonActions.reset({
        index: 1,
        routes: [{name: name, params: params}],
      }),
    );
  },
  back(): void {
    navigationRef.current.goBack();
  },
};

export default NavigationHelper;
