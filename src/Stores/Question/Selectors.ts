import {AppState} from '../index';

export const getQuestions = (state: AppState): Array<object> =>
  state.questions.questions;
