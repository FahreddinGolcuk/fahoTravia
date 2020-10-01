import React, {useEffect} from 'react';
import {AnimatedImage, Background, Button} from '@Components/index';
import {Text} from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import {useDispatch} from 'react-redux';
import {resetQuestionCount} from '@Stores/Question/Actions';
import {Colors} from '@Theme/index';
import {normalize} from '@Utils/Device';

const WonScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(resetQuestionCount());
    })();
  }, [dispatch]);

  return (
    <Background style={{backgroundColor: Colors.fourth}}>
      <Text
        style={{
          fontSize: normalize(50),
          color: Colors.primary,
          textAlign: 'center',
        }}>
        YOU WOOOONN!
      </Text>
      <AnimatedImage source={require('../../../Assets/won.png')} />
      <Button
        title="CONTINUE"
        onPress={() => NavigationHelper.navigate('Choice')}
      />
    </Background>
  );
};

export default WonScreen;
