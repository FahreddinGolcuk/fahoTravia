import React, {useEffect} from 'react';
import {AnimatedImage, Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {resetQuestionCount, resetScore} from '@Stores/Question/Actions';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Colors} from '@Theme/index';
import {normalize} from '@Plugins/Device';
import {getQuestionCount} from '@Stores/Question/Selectors';
import AdHelper from '@Plugins/AdHelper';

const WrongAnswerScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const questionCount = useSelector(getQuestionCount);
  useEffect(() => {
    (async () => {
      if (Math.random() > 0.5) {
        AdHelper.showInterstitialAd();
      }
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
