import { call, put } from 'redux-saga/effects';
import { Types as CartTypes } from './index';
import { createNewCart } from './Api';
import { Creators as AlertMessageCreators } from '../AlertMessage';
import { ProductPayload } from '../../types';

const { CREATE_CART_SUCCESS, CREATE_CART_FAILURE, SET_CART_STATE_SUCCESS, SET_CART_STATE_FAILURE } = CartTypes;

const { toggleAlertMessage } = AlertMessageCreators;

export function* createCart({ payload: { products, contact } }: any) {
  try {
    console.log('SAGA', products);
    console.log(contact);
    const { data } = yield call(createNewCart, products);
    console.log(data);
    yield put({
      type: CREATE_CART_SUCCESS,
      payload: { ...data, ...contact },
    });
    yield put(
      toggleAlertMessage({
        messageType: 'success',
        message: 'You have successfully created a cart',
      })
    );
  } catch (error) {
    yield put({
      type: CREATE_CART_FAILURE,
      errorMessage: error,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'error',
        message: error,
      })
    );
  }
}

export function* setCartState({ payload: { data, action } }: ProductPayload) {
  try {
    console.log('SAGA SET CART STATE', data);
    console.log('the acction', action);
    yield put({
      type: SET_CART_STATE_SUCCESS,
      payload: data,
      action,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'success',
        message: 'You have succesfully altered the local cart',
      })
    );
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_CART_STATE_FAILURE,
      errorMessage: error,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'error',
        message: error,
      })
    );
  }
}

export default createCart;
