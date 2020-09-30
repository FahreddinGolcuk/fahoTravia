import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {Colors, Helpers} from '@Theme/index';
import {deviceHeight, normalize} from '@Utils/Device';

interface StyleProps {
  container: ViewStyle;
  title: TextStyle;
  xSmall: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  xLarge: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: Colors.danger,
    height: deviceHeight() / 12,
    borderRadius: 30,
    ...Helpers.center,
    shadowColor: Colors.danger,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    margin: normalize(15),
    shadowOpacity: 0.6,
    shadowRadius: 18,
  },
  title: {
    color: Colors.primary,
    fontSize: normalize(20),
  },
  xSmall: {
    width: '20%',
  },
  small: {
    width: '30%',
  },
  large: {
    width: '50%',
  },
  medium: {
    width: '40%',
  },
  xLarge: {
    width: '70%',
  },
});
