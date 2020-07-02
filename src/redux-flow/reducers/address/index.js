import createReducer from '../createReducer';
import { UPDATE_ADDRESS } from './actions';

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 200
};

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload,
});

export default address;
