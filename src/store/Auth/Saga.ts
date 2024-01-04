import { put, call, select } from 'redux-saga/effects';
import { Types as AuthTypes } from './index';
import { login } from './Api';
import { Creators as AlertMessageCreators } from '../AlertMessage';

const { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } = AuthTypes;
const { toggleAlertMessage } = AlertMessageCreators;

export function* loginUser({ payload }: any) {
  const { user, navigate } = payload;
  try {
    const { data } = yield call(login, user);
    const { token } = data;
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: {
        ...data,
        token,
      },
    });
    yield localStorage.setItem('access_token', token);
    yield navigate('/');
  } catch (error: any) {
    alert(error.message);
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}
