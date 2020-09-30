import {INITIAL_STATE} from './InitialState';
import {
  CLEAR_QUESTIONS,
  INCREASE_QUESTION_COUNT,
  PUSH_QUESTIONS,
  QuestionsActionTypes,
  QuestionsState,
  RESET_QUESTION_COUNT,
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
    case INCREASE_QUESTION_COUNT:
      return <QuestionsState>{
        ...state,
        whichQuestion: state.whichQuestion + 1,
      };
    case RESET_QUESTION_COUNT:
      return <QuestionsState>{
        ...state,
        whichQuestion: 0,
      };
    default:
      return state;
  }
}
