import React from 'react';
import {Text} from 'react-native';
import _style from './style';
import {replaceCorrectTextFormatted} from '@Plugins/Functions';

interface QuestionProps {
  question: string;
}

const Question: React.FunctionComponent<QuestionProps> = ({
  question,
}): JSX.Element => {
  return (
    <Text style={_style.title}>{replaceCorrectTextFormatted(question)}</Text>
  );
};

export default Question;
