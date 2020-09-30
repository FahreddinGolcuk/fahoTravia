import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import _style from './style';

interface AnswerProps {
  pressed: (value: string) => void;
  correct: string;
  incorrect: Array<string>;
}

const Answer: React.FunctionComponent<AnswerProps> = ({
  pressed,
  correct,
  incorrect,
}): JSX.Element => {
  const shuffleAnswer = () => {
    return incorrect
      .concat(correct)
      .sort(() => Math.random() - Math.random())
      .slice(0, 4)
      .map((value, index) => {
        return (
          <TouchableOpacity
            style={_style.container}
            key={index}
            onPress={() => pressed(value)}>
            <Text style={_style.title}>{value}</Text>
          </TouchableOpacity>
        );
      });
  };
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {shuffleAnswer()}
    </View>
  );
};

export default Answer;
