import {INITIAL_STATE} from './InitialState';
import {
  CLEAR_QUESTIONS,
  PUSH_QUESTIONS,
  QuestionsActionTypes,
  QuestionsState,
} from './Types';

const initialState: QuestionsState = INITIAL_STATE;

export default function questionsReducer(
  state = initialState,
  action: QuestionsActionTypes,
): QuestionsState {
  switch (action.type) {
    case PUSH_QUESTIONS:
      return <QuestionsState>{
        ...state,
        questions: [action.payload],
      };
    case CLEAR_QUESTIONS:
      return <QuestionsState>{
        ...state,
        questions: [],
      };
    default:
      return state;
  }
}
