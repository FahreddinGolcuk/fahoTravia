export interface QuestionsState {
  whichQuestion: number;
  questions: Array<object>;
  difficult: string;
  score: number;
  joker: boolean;
  highScore: number;
}

export interface QuestionEditPayload {
  whichQuestion?: number;
  questions?: Array<object>;
  difficult?: string;
  score?: number;
  joker?: boolean;
  highScore?: number;
}

export const PUSH_QUESTIONS = 'PUSH_QUESTIONS';

interface PushQuestionsAction {
  type: typeof PUSH_QUESTIONS;
  payload: QuestionEditPayload;
}

export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';

interface ClearQuestionsAction {
  type: typeof CLEAR_QUESTIONS;
}

export const INCREASE_QUESTION_COUNT = 'INCREASE_QUESTION_COUNT';

interface IncreaseQuestionCountAction {
  type: typeof INCREASE_QUESTION_COUNT;
}

export const RESET_QUESTION_COUNT = 'RESET_QUESTION_COUNT';

interface ResetQuestionCountAction {
  type: typeof RESET_QUESTION_COUNT;
}

export const RESET_SCORE = 'RESET_SCORE';

interface ResetScoreAction {
  type: typeof RESET_SCORE;
}

export const ADD_SCORE = 'ADD_SCORE';

interface AddScoreAction {
  type: typeof ADD_SCORE;
  payload: QuestionEditPayload;
}

export const USED_JOKER = 'USED_JOKER';

interface UsedJokerAction {
  type: typeof USED_JOKER;
  payload: QuestionEditPayload;
}

export const SET_HIGH_SCORE = 'SET_HIGH_SCORE';

interface SetHighScoreAction {
  type: typeof SET_HIGH_SCORE;
  payload: QuestionEditPayload;
}

export type QuestionsActionTypes =
  | PushQuestionsAction
  | ClearQuestionsAction
  | IncreaseQuestionCountAction
  | ResetQuestionCountAction
  | ResetScoreAction
  | AddScoreAction
  | UsedJokerAction
  | SetHighScoreAction;
