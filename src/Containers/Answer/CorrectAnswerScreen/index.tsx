import React, {useEffect} from 'react';
import {AnimatedImage, Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {increaseQuestionCount} from '@Stores/Question/Actions';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Colors} from '@Theme/index';
import {normalize} from '@Utils/Device';

const CorrectAnswerScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(increaseQuestionCount());
    })();
  }, [dispatch]);

  return (
    <Background style={{backgroundColor: Colors.success}}>
      <Text style={{fontSize: normalize(50), color: Colors.primary}}>
        CORRECT
      </Text>
      <AnimatedImage source={require('../../../Assets/correct.png')} />
      <Button
        titleColor={Colors.text}
        backgroundColor={Colors.primary}
        title="CONTINUE"
        onPress={() => NavigationHelper.navigate('Game')}
      />
    </Background>
  );
};

export default CorrectAnswerScreen;
