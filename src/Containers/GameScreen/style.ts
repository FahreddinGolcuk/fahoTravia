import {StyleSheet, ViewStyle} from 'react-native';
import {normalize} from '@Plugins/Device';

interface StyleProps {
  topBar: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginLeft: normalize(15),
    marginRight: normalize(15),
  },
});
