import React, {useEffect, useState} from 'react';
import {Background, Button} from '@Components/index';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getQuestions} from '@Stores/Question/Selectors';

const GameScreen = (): JSX.Element => {
  const [time, setTime] = useState(15);
  const questions = useSelector(getQuestions);
  console.log(questions[0]);
  let timeOut;
  const startInterval = () => {
    setInterval(() => {
      timeOut = setTime((prevState) => prevState - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timeOut);
    }, 3000);
  };

  return (
    <Background>
      <Text>{time}</Text>
      <Button title="Start" onPress={startInterval} />
    </Background>
  );
};

export default GameScreen;
