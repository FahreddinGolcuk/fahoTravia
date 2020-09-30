import {AppState} from '../index';

export const getQuestions = (state: AppState): Array<object> =>
  state.questions.questions;

export const getQuestionCount = (state: AppState): number =>
  state.questions.whichQuestion;
