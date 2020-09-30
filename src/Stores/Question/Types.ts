export interface QuestionsState {
  whichQuestion: number;
  questions: Array<object>;
  difficult: string;
}

export interface QuestionEditPayload {
  whichQuestion?: number;
  questions?: Array<object>;
  difficult?: string;
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

export type QuestionsActionTypes = PushQuestionsAction | ClearQuestionsAction;
