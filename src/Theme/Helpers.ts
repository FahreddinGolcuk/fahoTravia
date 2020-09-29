import {
  FlexStyle,
  StyleSheet,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from 'react-native';
import {Colors} from './index';

interface Styles {
  backgroundReset: ViewStyle;
  center: FlexStyle;
  colCenter: FlexStyle;
  colCross: FlexStyle;
  colMain: FlexStyle;
  column: FlexStyle;
  columnReverse: FlexStyle;
  crossCenter: FlexStyle;
  crossEnd: FlexStyle;
  crossStart: FlexStyle;
  crossStretch: FlexStyle;
  fill: FlexStyle;
  fillCenter: FlexStyle;
  fillCol: FlexStyle;
  fillColCenter: FlexStyle;
  fillColCross: FlexStyle;
  fillColMain: FlexStyle;
  fillColReverse: FlexStyle;
  fillRow: FlexStyle;
  fillRowCenter: FlexStyle;
  fillRowCross: FlexStyle;
  fillRowMain: FlexStyle;
  fillRowReverse: FlexStyle;
  fullSize: FlexStyle;
  fullWidth: FlexStyle;
  fullHeight: FlexStyle;
  mainCenter: FlexStyle;
  mainEnd: FlexStyle;
  mainSpaceAround: FlexStyle;
  mainSpaceBetween: FlexStyle;
  mainStart: FlexStyle;
  mirror: TransformsStyle;
  rotate90: TransformsStyle;
  rotate90Inverse: TransformsStyle;
  row: FlexStyle;
  rowCenter: FlexStyle;
  rowCross: FlexStyle;
  rowMain: FlexStyle;
  rowReverse: FlexStyle;
  scrollSpaceAround: FlexStyle;
  scrollSpaceBetween: FlexStyle;
  selfStretch: FlexStyle;
  selfCenter: FlexStyle;
  pullLeft: FlexStyle;
  pullRight: FlexStyle;
  textCenter: TextStyle;
  textJustify: TextStyle;
  textLeft: TextStyle;
  textRight: TextStyle;
  hide: ViewStyle;
  show: ViewStyle;
  maxZIndex: ViewStyle;
}

const Helpers = StyleSheet.create<Styles>({
  backgroundReset: {
    backgroundColor: Colors.transparent,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colCross: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  colMain: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  crossCenter: {
    alignItems: 'center',
  },
  crossEnd: {
    alignItems: 'flex-end',
  },
  crossStart: {
    alignItems: 'flex-start',
  },
  crossStretch: {
    alignItems: 'stretch',
  },
  fill: {
    flex: 1,
  },
  fillCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fillCol: {
    flex: 1,
    flexDirection: 'column',
  },
  fillColCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  fillColMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColReverse: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  fillRow: {
    flex: 1,
    flexDirection: 'row',
  },
  fillRowCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  fillRowMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  mainCenter: {
    justifyContent: 'center',
  },
  mainEnd: {
    justifyContent: 'flex-end',
  },
  mainSpaceAround: {
    justifyContent: 'space-around',
  },
  mainSpaceBetween: {
    justifyContent: 'space-between',
  },
  mainStart: {
    justifyContent: 'flex-start',
  },
  mirror: {
    transform: [{scaleX: -1}],
  },
  rotate90: {
    transform: [{rotate: '90deg'}],
  },
  rotate90Inverse: {
    transform: [{rotate: '-90deg'}],
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCross: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  pullLeft: {
    alignItems: 'flex-start',
  },
  pullRight: {
    alignItems: 'flex-end',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  maxZIndex: {
    zIndex: 999999,
  },
});

export default Helpers;
