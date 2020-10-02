import {INITIAL_STATE} from './InitialState';
import {
  ADD_SCORE,
  CLEAR_QUESTIONS,
  INCREASE_QUESTION_COUNT,
  PUSH_QUESTIONS,
  QuestionsActionTypes,
  QuestionsState,
  RESET_QUESTION_COUNT,
  RESET_SCORE,
  USED_JOKER,
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
    case RESET_SCORE:
      return <QuestionsState>{
        ...state,
        score: 0,
      };
    case ADD_SCORE:
      return <QuestionsState>{
        ...state,
        score: state.score += action.payload.score,
      };
    case USED_JOKER:
      return <QuestionsState>{
        ...state,
        joker: !state.joker,
      };
    default:
      return state;
  }
}
