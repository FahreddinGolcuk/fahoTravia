import React, {useEffect} from 'react';
import {Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {increaseQuestionCount} from '@Stores/Question/Actions';
import NavigationHelper from '@Plugins/NavigationHelper';

const CorrectAnswerScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(increaseQuestionCount());
    })();
  }, [dispatch]);
  return (
    <Background>
      <Text>CORRECT</Text>
      <Button
        title="CONTINUE"
        onPress={() => NavigationHelper.navigate('Game')}
      />
    </Background>
  );
};

export default CorrectAnswerScreen;
