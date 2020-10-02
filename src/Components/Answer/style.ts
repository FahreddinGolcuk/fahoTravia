import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, Helpers} from '@Theme/index';
import {normalize} from '@Plugins/Device';

interface StyleProps {
  box: ViewStyle;
  title: TextStyle;
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    ...Helpers.center,
    ...Helpers.row,
    ...Helpers.fullWidth,
    flexWrap: 'wrap',
  },
  box: {
    ...Helpers.center,
    width: '75%',
    backgroundColor: Colors.secondary,
    height: normalize(50),
    margin: normalize(8),
    borderLeftWidth: normalize(6),
    borderLeftColor: Colors.primary,
    borderRadius: 8,
    shadowColor: Colors.secondary,
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
    fontSize: normalize(12),
  },
});
