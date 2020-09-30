import React from 'react';
import {Text} from 'react-native';
import _style from './style';

interface QuestionProps {
  question: string;
}

const Question: React.FunctionComponent<QuestionProps> = ({
  question,
}): JSX.Element => {
  return <Text style={_style.title}>{question}</Text>;
};

export default Question;
