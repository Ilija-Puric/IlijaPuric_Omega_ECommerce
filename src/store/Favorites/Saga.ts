import { put } from 'redux-saga/effects';
import { Types as FavoriteTypes } from './index';
import { Creators as AlertMessageCreators } from '../AlertMessage';

const { LIKE_PRODUCT_SUCCESS, LIKE_PRODUCT_FAILURE } = FavoriteTypes;
const { toggleAlertMessage } = AlertMessageCreators;

export function* likeProduct({ payload }: any) {
  try {
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
    yield put({
      type: LIKE_PRODUCT_FAILURE,
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
