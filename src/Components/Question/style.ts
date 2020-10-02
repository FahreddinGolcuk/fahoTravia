import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '@Theme/index';
import {normalize} from '@Plugins/Device';

interface StyleProps {
  title: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  title: {
    color: Colors.text,
    textAlign: 'center',
    padding: normalize(12),
    fontSize: normalize(25),
  },
});
