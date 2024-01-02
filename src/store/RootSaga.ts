import { all, takeLatest } from 'redux-saga/effects';
import { toggleAlertMessage } from './AlertMessage/Saga';
import { Types as AlertMessageTypes } from './AlertMessage';
import { Types as ProductTypes } from './Product';
import { Types as AuthTypes } from './Auth';
import { loginUser } from './Auth/Saga';
import { getAllProducts, getProductByID } from './Product/Saga';
const {
  LOGIN_USER,
  // REGISTER_USER, SWAP_TOKEN, LOGOUT_USER, GET_CURRENT_USER
} = AuthTypes;
const { TOGGLE_ALERT_MESSAGE } = AlertMessageTypes;
const { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } = ProductTypes;

export default function* root() {
  yield all([
    takeLatest(TOGGLE_ALERT_MESSAGE as any, toggleAlertMessage),
    takeLatest(LOGIN_USER, loginUser),
    takeLatest(GET_ALL_PRODUCTS as any, getAllProducts),
    takeLatest(GET_PRODUCT_BY_ID as any, getProductByID),
  ]);
}
