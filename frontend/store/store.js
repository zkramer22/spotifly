import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

console.log(process.env.NODE_ENV !== 'production');

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env);
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return (
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
