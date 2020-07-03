import deepFreeze from 'deep-freeze';
import address from './index';
import { FETCHING, SUCCESS } from './actions';

// it('address should be a function', () => {
//   expect(address).toBeInstanceOf(Function);
// });

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
    isFetching: true
  });

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Avenida Presidente Kennedy - de 1632',
      city: 'Curitiba',
      code: '80610-010',
      district: 'Água Verde',
      state: 'PR',
      status: 200,
    },
  });

  const after = {
    address: 'Avenida Presidente Kennedy - de 1632',
    city: 'Curitiba',
    code: '80610-010',
    district: 'Água Verde',
    state: 'PR',
    status: 200,
    isFetching: false
  };

  expect(address(before, action)).toEqual(after);
});
