import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import _style from './style';
import {replaceCorrectTextFormatted} from '@Plugins/Functions';

interface AnswerProps {
  pressed: (value: string) => void;
  correct: string;
  incorrect: Array<string>;
  isJokerUsed?: boolean;
}

const Answer: React.FunctionComponent<AnswerProps> = ({
  pressed,
  correct,
  incorrect,
  isJokerUsed = false,
}): JSX.Element => {
  const shuffleAnswer = () => {
    if (isJokerUsed) {
      incorrect = incorrect.slice(0, 1);
    }

    return incorrect
      .concat(correct)
      .sort(() => Math.random() - Math.random())
      .slice(0, 4)
      .map((value, index) => {
        return (
          <TouchableOpacity
            style={_style.box}
            key={index}
            onPress={() => pressed(value)}>
            <Text style={_style.title}>
              {replaceCorrectTextFormatted(value)}
            </Text>
          </TouchableOpacity>
        );
      });
  };
  return <View style={_style.container}>{shuffleAnswer()}</View>;
};

export default Answer;
