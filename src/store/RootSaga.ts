import { all, takeLatest } from 'redux-saga/effects';
import { toggleAlertMessage } from './AlertMessage/Saga';
import { Types as AlertMessageTypes } from './AlertMessage';
import { loginUser } from './Auth/Saga';
import { Types as AuthTypes } from './Auth';
// import { loginUser, registerUser, swapToken, logoutUser, getCurrentUser } from './Auth/Saga';
const {
  LOGIN_USER,
  // REGISTER_USER, SWAP_TOKEN, LOGOUT_USER, GET_CURRENT_USER
} = AuthTypes;
const { TOGGLE_ALERT_MESSAGE } = AlertMessageTypes;

export default function* root() {
  yield all([
    takeLatest(TOGGLE_ALERT_MESSAGE as any, toggleAlertMessage),
    takeLatest(LOGIN_USER, loginUser),
    // takeLatest(LOGOUT_USER, logoutUser),
  ]);
}
