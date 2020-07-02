import deepFreeze from 'deep-freeze';
import createReducer from './createReducer';

const initialState = 0;

const reducer = createReducer(initialState, {
  'INCREMENT': (state, action) => state + 1,
  'DECREMENT': (state, action) => state - 1 
});


it('createReducer should be a function', () => {
  expect(createReducer).toBeInstanceOf(Function);
});

it('createReducer(initialState, {}) should return a function', () => {
  expect(createReducer([], {})).toBeInstanceOf(Function);
});

it('should create a reducer', () => {
  const before = 0;
  
  const action = deepFreeze({
    type: 'INCREMENT'
  });

  const after = 1;

  expect(reducer(before, action)).toEqual(after);
});

it('reducer should return latest state if action is unknown', () => {
  const before = 3;
  
  const action = deepFreeze({
    type: 'UNKNOWN'
  });

  const after = 3;

  expect(reducer(before, action)).toEqual(after);
});

it('reducer should return initialState when latest state is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;

  expect(reducer(before, action)).toEqual(after);
});

it('initialState should not be undefined', () => {
  try{
    createReducer();
  }catch (e) {
    expect(e.message).toEqual('initialState should not be undefined');
  }
});
