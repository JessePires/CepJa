import createReducer from '../createReducer';
import { FETCHING, SUCCESS } from './actions';

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 200,
  isFetching: false
};

const address = createReducer(initialState, {
  [FETCHING]: (state, actionn) => ({
    ...state,
    isFetching: true
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  })
});

export default address;
