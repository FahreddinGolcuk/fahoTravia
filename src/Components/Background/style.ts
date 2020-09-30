import {ViewStyle, StyleSheet} from 'react-native';
import {Colors, Helpers} from '@Theme/index';

interface StyleProps {
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    ...Helpers.crossCenter,
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
