import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { Types as AuthTypes } from './index';
import {
  login,
  // logout,
  // fetchCurrentUser
} from './Api';
import { Creators as AlertMessageCreators } from '../AlertMessage';

const {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  // LOGOUT_USER_SUCCESS,
  // GET_CURRENT_USER_SUCCESS,
  // GET_CURRENT_USER_FAILURE
} = AuthTypes;
const { toggleAlertMessage } = AlertMessageCreators;

const currentLoggedUser = (state) => state.auth.currentLoggedUser;

// export function* getCurrentUser(payload) {
//   try {
//     const response = yield call(fetchCurrentUser, payload);

//     yield put({
//       type: GET_CURRENT_USER_SUCCESS,
//       payload: response.data,
//     });

//     yield put(
//       toggleAlertMessage({
//         messageType: 'success',
//         message: 'You have successfully selected the user!',
//       })
//     );
//   } catch (error) {
//     yield put({
//       type: GET_CURRENT_USER_FAILURE,
//       error: error.message,
//     });
//     yield put(
//       toggleAlertMessage({
//         messageType: 'error',
//         message: error.message,
//       })
//     );
//   }
// }

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
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

// export function* logoutUser({ payload }) {
//   try {
//     const { history } = payload;
//     const { refresh_token } = yield select(currentLoggedUser);
//     yield call(logout, refresh_token);
//     yield put({
//       type: LOGOUT_USER_SUCCESS,
//     });
//     localStorage.clear();
//     history.replace('/login');
//   } catch (error) {
//     yield put(
//       toggleAlertMessage({
//         messageType: 'error',
//         message: error.message,
//       })
//     );
//   }
// }
