import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '@Theme/index';
import {normalize} from '@Utils/Device';

interface StyleProps {
  container: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    width: '50%',
    backgroundColor: Colors.tertiary,
    height: normalize(50),
    margin: normalize(25),
    borderLeftWidth: normalize(6),
    borderLeftColor: Colors.primary,
    borderRadius: 16,
    shadowColor: Colors.danger,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 18,
  },
  title: {
    color: Colors.primary,
    textAlign: 'center',
    padding: normalize(12),
    fontSize: normalize(25),
  },
});
