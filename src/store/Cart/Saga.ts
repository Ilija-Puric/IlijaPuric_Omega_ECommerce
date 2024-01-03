import { call, put } from 'redux-saga/effects';
import { Types as CartTypes } from './index';
import { createNewCart } from './Api';
import { Creators as AlertMessageCreators } from '../AlertMessage';

const { CREATE_CART_SUCCESS, CREATE_CART_FAILURE, SET_CART_STATE_SUCCESS, SET_CART_STATE_FAILURE } = CartTypes;

const { toggleAlertMessage } = AlertMessageCreators;

export function* createCart({ payload }: any) {
  try {
    console.log('SAGA', payload);
    const { data } = yield call(createNewCart, payload);
    yield put({
      type: CREATE_CART_SUCCESS,
      payload: data,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'success',
        message: 'You have successfully an item to the cart',
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

export function* setCartState({ payload }: any) {
  try {
    console.log('SAGA SET CART STATE', payload);
    yield put({
      type: SET_CART_STATE_SUCCESS,
      payload,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'success',
        message: 'You have successfully an item to the cart',
      })
    );
  } catch (error) {
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
