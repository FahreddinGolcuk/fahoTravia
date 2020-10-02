import {
  ADD_SCORE,
  CLEAR_QUESTIONS,
  INCREASE_QUESTION_COUNT,
  PUSH_QUESTIONS,
  QuestionsActionTypes,
  RESET_QUESTION_COUNT,
  RESET_SCORE,
  SET_HIGH_SCORE,
  USED_JOKER,
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

export function resetScore(): QuestionsActionTypes {
  return {
    type: RESET_SCORE,
  };
}

export function addScore(payload: {score: number}): QuestionsActionTypes {
  return {
    type: ADD_SCORE,
    payload,
  };
}

export function shitJoker(payload: {joker: boolean}): QuestionsActionTypes {
  return {
    type: USED_JOKER,
    payload,
  };
}

export function setHighScore(payload: {
  highScore: number;
}): QuestionsActionTypes {
  return {
    type: SET_HIGH_SCORE,
    payload,
  };
}
