import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import fetchReducer from './reducers/fetch'
import titleReducer from './reducers/title'
import questionsReducer from './reducers/questions'
import filtersReducer from './reducers/filters'

import { handleQuestionIndex } from './actions/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      fetch: fetchReducer,
      title: titleReducer,
      filters: filtersReducer,
      questions: questionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  // store.subscribe(() => {
  //   console.log(store.getState())
  // })
  // store.dispatch(handleQuestionIndex({sequence: 3}))

  console.log(store.getState())

  return store;
}
