import {
  CLEAR_QUESTIONS,
  INCREASE_QUESTION_COUNT,
  PUSH_QUESTIONS,
  QuestionsActionTypes,
  RESET_QUESTION_COUNT,
} from './Types';
import QuestionService from '@Services/QuestionService';

export async function pushQuestions(payload: {
  difficult: string;
  category: string;
}): Promise<QuestionsActionTypes> {
  const result = await QuestionService.fetchNewQuestions(
    payload.difficult,
    payload.category,
  );

  return {
    type: PUSH_QUESTIONS,
    payload: result.results,
  };
}

export function clearQuestions(): QuestionsActionTypes {
  return {
    type: CLEAR_QUESTIONS,
  };
}

export function increaseQuestionCount(): QuestionsActionTypes {
  return {
    type: INCREASE_QUESTION_COUNT,
  };
}

export function resetQuestionCount(): QuestionsActionTypes {
  return {
    type: RESET_QUESTION_COUNT,
  };
}
