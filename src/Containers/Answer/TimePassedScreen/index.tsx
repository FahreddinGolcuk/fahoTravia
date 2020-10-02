import React, {useEffect} from 'react';
import {AnimatedImage, Background, Button} from '@Components/index';
import {Text} from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Colors} from '@Theme/index';
import {normalize} from '@Plugins/Device';
import {useDispatch} from 'react-redux';
import {resetQuestionCount, resetScore} from '@Stores/Question/Actions';

const TimePassedScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(resetQuestionCount());
      dispatch(resetScore());
    })();
  }, [dispatch]);
  return (
    <Background style={{backgroundColor: Colors.text}}>
      <Text style={{fontSize: normalize(50), color: Colors.primary}}>
        TIME PASSED
      </Text>
      <AnimatedImage source={require('../../../Assets/time.png')} />
      <Button
        style={{shadowColor: Colors.danger}}
        titleColor={Colors.primary}
        backgroundColor={Colors.danger}
        title="TRY AGAIN"
        onPress={() => NavigationHelper.navigate('Choice')}
      />
    </Background>
  );
};

export default TimePassedScreen;
