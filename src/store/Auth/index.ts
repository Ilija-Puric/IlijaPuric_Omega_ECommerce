import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginUser: ['payload'],
  loginUserSuccess: ['payload'],
  loginUserFailure: ['error'],

  // getCurrentUser: ['payload'],
  // getCurrentUserSuccess: ['payload'],
  // getCurrentUserFailure: ['error'],

  // logoutUser: ['payload'],
  // logoutUserSuccess: ['payload'],
  // logoutUserFailure: ['error'],
});

export { Types };
export { Creators };
