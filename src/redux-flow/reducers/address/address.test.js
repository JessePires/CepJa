import deepFreeze from 'deep-freeze';
import address from './index';
import { UPDATE_ADDRESS } from './actions';

// it('address should be a function', () => {
//   expect(address).toBeInstanceOf(Function);
// });

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
  });

  const action = deepFreeze({
    type: [UPDATE_ADDRESS],
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
  };

  expect(address(before, action)).toEqual(after);
});
