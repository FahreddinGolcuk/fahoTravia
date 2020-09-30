import React, {useEffect, useState} from 'react';
import {Answer, Background, Button, Question} from '@Components/index';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getQuestionCount, getQuestions} from '@Stores/Question/Selectors';
import NavigationHelper from '@Plugins/NavigationHelper';

const GameScreen = (): JSX.Element => {
  const [time, setTime] = useState(15);
  const questions = useSelector(getQuestions);
  const questionCount = useSelector(getQuestionCount);
  const currentQuestion = questions[0][questionCount];
  console.log(currentQuestion);
  /*  let timeOut;

  useEffect(() => {
    setInterval(() => {
      timeOut = setTime((prevState) => prevState - 1);
    }, 1000);
  }, [setTime]);*/

  return (
    <Background>
      <Text>{questionCount + '/ 10'}</Text>
      <Text>{time}</Text>
      <Question question={currentQuestion.question} />
      <Answer
        pressed={(value) => {
          if (value === currentQuestion.correct_answer) {
            NavigationHelper.navigate('Correct');
          } else {
            NavigationHelper.navigate('Wrong');
          }
        }}
        correct={currentQuestion.correct_answer}
        incorrect={currentQuestion.incorrect_answers}
      />
    </Background>
  );
};

export default GameScreen;
