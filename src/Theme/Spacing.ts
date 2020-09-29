import {FlexStyle, StyleSheet} from 'react-native';
import {normalize} from '@Utils/Device';

interface Styles {
  margin1: FlexStyle;
  margin2: FlexStyle;
  margin3: FlexStyle;
  margin4: FlexStyle;
  marginTop1: FlexStyle;
  marginTop2: FlexStyle;
  marginTop3: FlexStyle;
  marginTop4: FlexStyle;
  marginRight1: FlexStyle;
  marginRight2: FlexStyle;
  marginRight3: FlexStyle;
  marginRight4: FlexStyle;
  marginBottom1: FlexStyle;
  marginBottom2: FlexStyle;
  marginBottom3: FlexStyle;
  marginBottom4: FlexStyle;
  marginLeft1: FlexStyle;
  marginLeft2: FlexStyle;
  marginLeft3: FlexStyle;
  marginLeft4: FlexStyle;
  padding1: FlexStyle;
  padding2: FlexStyle;
  padding3: FlexStyle;
  padding4: FlexStyle;
  paddingTop1: FlexStyle;
  paddingTop2: FlexStyle;
  paddingTop3: FlexStyle;
  paddingTop4: FlexStyle;
  paddingRight1: FlexStyle;
  paddingRight2: FlexStyle;
  paddingRight3: FlexStyle;
  paddingRight4: FlexStyle;
  paddingBottom1: FlexStyle;
  paddingBottom2: FlexStyle;
  paddingBottom3: FlexStyle;
  paddingBottom4: FlexStyle;
  paddingLeft1: FlexStyle;
  paddingLeft2: FlexStyle;
  paddingLeft3: FlexStyle;
  paddingLeft4: FlexStyle;
}

const Spacing = StyleSheet.create<Styles>({
  margin1: {
    margin: normalize(10),
  },
  margin2: {
    margin: normalize(20),
  },
  margin3: {
    margin: normalize(30),
  },
  margin4: {
    margin: normalize(40),
  },
  marginTop1: {
    marginTop: normalize(10),
  },
  marginTop2: {
    marginTop: normalize(20),
  },
  marginTop3: {
    marginTop: normalize(30),
  },
  marginTop4: {
    marginTop: normalize(40),
  },
  marginRight1: {
    marginRight: normalize(10),
  },
  marginRight2: {
    marginRight: normalize(20),
  },
  marginRight3: {
    marginRight: normalize(30),
  },
  marginRight4: {
    marginTop: normalize(40),
  },
  marginBottom1: {
    marginBottom: normalize(10),
  },
  marginBottom2: {
    marginBottom: normalize(20),
  },
  marginBottom3: {
    marginBottom: normalize(30),
  },
  marginBottom4: {
    marginTop: normalize(40),
  },
  marginLeft1: {
    marginLeft: normalize(10),
  },
  marginLeft2: {
    marginLeft: normalize(20),
  },
  marginLeft3: {
    marginLeft: normalize(30),
  },
  marginLeft4: {
    marginTop: normalize(40),
  },
  padding1: {
    padding: normalize(10),
  },
  padding2: {
    padding: normalize(20),
  },
  padding3: {
    padding: normalize(30),
  },
  padding4: {
    padding: normalize(40),
  },
  paddingTop1: {
    paddingTop: normalize(10),
  },
  paddingTop2: {
    paddingTop: normalize(20),
  },
  paddingTop3: {
    paddingTop: normalize(30),
  },
  paddingTop4: {
    paddingTop: normalize(40),
  },
  paddingRight1: {
    paddingRight: normalize(10),
  },
  paddingRight2: {
    paddingRight: normalize(20),
  },
  paddingRight3: {
    paddingRight: normalize(30),
  },
  paddingRight4: {
    paddingRight: normalize(40),
  },
  paddingBottom1: {
    paddingBottom: normalize(10),
  },
  paddingBottom2: {
    paddingBottom: normalize(20),
  },
  paddingBottom3: {
    paddingBottom: normalize(30),
  },
  paddingBottom4: {
    paddingBottom: normalize(40),
  },
  paddingLeft1: {
    paddingLeft: normalize(10),
  },
  paddingLeft2: {
    paddingLeft: normalize(20),
  },
  paddingLeft3: {
    paddingLeft: normalize(30),
  },
  paddingLeft4: {
    paddingLeft: normalize(40),
  },
});

export default Spacing;
