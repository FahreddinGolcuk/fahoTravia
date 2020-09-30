import {combineReducers, createStore} from 'redux';
import questionsReducer from './Question/Reducers';

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
