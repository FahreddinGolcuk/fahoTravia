import {AppState} from '../index';

export const getQuestions = (state: AppState): Array<object> =>
  state.questions.questions;

export const getQuestionCount = (state: AppState): number =>
  state.questions.whichQuestion;

export const getScore = (state: AppState): number => state.questions.score;

export const getJokerState = (state: AppState): boolean =>
  state.questions.joker;

export const getHighScore = (state: AppState): number =>
  state.questions.highScore;
