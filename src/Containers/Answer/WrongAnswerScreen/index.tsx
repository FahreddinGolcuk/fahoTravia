import React, {useEffect} from 'react';
import {Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetQuestionCount} from '@Stores/Question/Actions';
import NavigationHelper from '@Plugins/NavigationHelper';

const WrongAnswerScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(resetQuestionCount());
    })();
  }, [dispatch]);
  return (
    <Background>
      <Text>WRONG</Text>
      <Button
        title="CONTINUE"
        onPress={() => NavigationHelper.navigate('Choice')}
      />
    </Background>
  );
};

export default WrongAnswerScreen;
