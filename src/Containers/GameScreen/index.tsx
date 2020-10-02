import React, {useState} from 'react';
import {
  Answer,
  Background,
  Button,
  Countdown,
  Question,
} from '@Components/index';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getJokerState,
  getQuestionCount,
  getQuestions,
  getScore,
} from '@Stores/Question/Selectors';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Helpers} from '@Theme/index';
import _style from './style';
import {useFocusEffect} from '@react-navigation/native';
import {shitJoker} from '@Stores/Question/Actions';

const GameScreen = ({navigation}): JSX.Element => {
  let time = 15;
  let currentCount = 15;
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);
  const questionCount = useSelector(getQuestionCount);
  const jokerState = useSelector(getJokerState);
  const score = useSelector(getScore);
  const [joker, setJoker] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setJoker(false);
    }, []),
  );
  // @ts-ignore
  const currentQuestion = questions[0][questionCount];
  console.log(currentQuestion);
  return (
    <Background>
      <View style={_style.topBar}>
        <View style={[Helpers.crossCenter]}>
          <Text>Question</Text>
          <Text>{questionCount + 1 + '/ 10'}</Text>
        </View>
        <View style={[Helpers.crossCenter]}>
          <Text>Point</Text>
          <Text>{score}</Text>
        </View>
        <View style={[Helpers.crossCenter]}>
          <Text>Remaining Time</Text>
          <Countdown
            onFinish={() => {
              const isFocused = navigation.isFocused();
              isFocused &&
                NavigationHelper.navigate('TimePass', {
                  difficulty: currentQuestion.difficulty,
                });
            }}
            until={time}
            onChange={(current) => {
              currentCount = current;
            }}
          />
        </View>
      </View>
      <Button
        disable={jokerState}
        title="%50 Joker"
        onPress={() => {
          setJoker(true);
          dispatch(shitJoker());
        }}
      />
      <Question question={currentQuestion.question} />
      <Answer
        isJokerUsed={joker}
        pressed={(value) => {
          if (value === currentQuestion.correct_answer) {
            if (questionCount == 9) {
              NavigationHelper.navigate('Won', {
                difficulty: currentQuestion.difficulty,
              });
            } else {
              let factor = 1;
              switch (currentQuestion.difficulty) {
                case 'easy':
                  factor = 2;
                  break;
                case 'medium':
                  factor = 3;
                  break;
                case 'hard':
                  factor = 4;
                  break;
                default:
                  factor = 1;
                  break;
              }
              NavigationHelper.navigate('Correct', {
                score: currentCount * factor,
              });
            }
          } else {
            NavigationHelper.navigate('Wrong', {
              difficulty: currentQuestion.difficulty,
            });
          }
        }}
        correct={currentQuestion.correct_answer}
        incorrect={currentQuestion.incorrect_answers}
      />
    </Background>
  );
};

export default GameScreen;
