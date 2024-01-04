import { put } from 'redux-saga/effects';
import { Types as FavoriteTypes } from './index';
import { Creators as AlertMessageCreators } from '../AlertMessage';
import { ProductPayload } from '../../types';

const { LIKE_PRODUCT_SUCCESS, LIKE_PRODUCT_FAILURE, SET_CART_STATE_SUCCESS, SET_CART_STATE_FAILURE } = FavoriteTypes;
const { toggleAlertMessage } = AlertMessageCreators;

export function* likeProduct({ payload }: any) {
  try {
    console.log('SAGA SET LIKE STATE', payload);
    yield put({
      type: LIKE_PRODUCT_SUCCESS,
      payload,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'success',
        message: 'You have succesfully favorited an item',
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

export default likeProduct;
