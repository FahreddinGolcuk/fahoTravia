import {CLEAR_QUESTIONS, PUSH_QUESTIONS, QuestionsActionTypes} from './Types';
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
