import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from '../reducers';

export default ({ initialState } = {}) => {
  const store = createStore(
    mainReducer,
    initialState,
    applyMiddleware(loggerMiddleware, thunkMiddleware)
  );

  return store;
};

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${ action.type }`);
  console.log('will dispatch:', action);
  console.log('state: ', getState());
  const nextAction = next(action);
  console.log('next state:', getState());
  console.groupEnd(`LOGGER->${ action.type }`);
  return nextAction;
};
