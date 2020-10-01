import React, {useEffect} from 'react';
import {AnimatedImage, Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetQuestionCount, resetScore} from '@Stores/Question/Actions';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Colors} from '@Theme/index';
import {normalize} from '@Utils/Device';

const WrongAnswerScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(resetQuestionCount());
      dispatch(resetScore());
    })();
  }, [dispatch]);

  return (
    <Background style={{backgroundColor: Colors.danger}}>
      <Text style={{fontSize: normalize(50), color: Colors.primary}}>
        WRONG
      </Text>
      <AnimatedImage source={require('../../../Assets/wrong.png')} />
      <Button
        backgroundColor={Colors.primary}
        titleColor={Colors.text}
        title="CONTINUE"
        onPress={() => NavigationHelper.navigate('Choice')}
      />
    </Background>
  );
};

export default WrongAnswerScreen;
