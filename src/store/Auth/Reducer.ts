import { createReducer } from 'reduxsauce';
import { Types as AuthTypes } from './index';
const { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } = AuthTypes;

type Gender = 'male' | 'female';
type Error = {
  payload: {
    error: string;
  };
};
interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
  token: string;
}
interface Response {
  currentLoggedUser: null | User;
  loading: boolean;
  errorMessage: null | string;
  userRegistered: boolean;
}

const initialState: Response = {
  currentLoggedUser: null,
  loading: false,
  errorMessage: null,
  userRegistered: false,
};

const loginUser = (state: any) => ({
  ...state,
  loading: true,
  errorMessage: null,
});

const loginUserSuccess = (state: any, { payload }: any) => {
  console.log('REDUCER SUCC', state, payload);
  return {
    ...state,
    currentLoggedUser: payload,
    loading: false,
    errorMessage: null,
  };
};

const loginUserFailure = (state: any, { payload: { error } }: Error) => {
  console.log('REDUCER ERROR', state, error);
  return {
    ...state,
    currentLoggedUser: null,
    errorMessage: error,
    loading: false,
    userRegistered: false,
  };
};

const AuthReducer = createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGIN_USER_SUCCESS]: loginUserSuccess,
  [LOGIN_USER_FAILURE]: loginUserFailure,
});

export default AuthReducer;
