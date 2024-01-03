import { call, put } from 'redux-saga/effects';
import { Types as ProductTypes } from './index';
import { fetchAllProducts, fetchProductById } from './Api';
import { Creators as AlertMessageCreators } from '../AlertMessage';
const { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCT_BY_ID_FAILURE } =
  ProductTypes;
const { toggleAlertMessage } = AlertMessageCreators;

export function* getAllProducts({ payload = {} }): Generator<any> {
  try {
    const response = yield call(fetchAllProducts, payload);
    const { data } = response as any;
    yield put({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    yield put({
      type: GET_ALL_PRODUCTS_FAILURE,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'error',
        message: error.message,
      })
    );
  }
}

export function* getProductByID({ payload }): Generator<any> {
  try {
    const response = yield call(fetchProductById, payload?.id);
    const { data } = response as any;
    yield put({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      // payload: [responseFinal, projectUsersData, projectGroupsData],
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_BY_ID_FAILURE,
      errorMessage: error,
    });
    yield put(
      toggleAlertMessage({
        messageType: 'error',
        message: error.message,
      })
    );
  }
}

export default getAllProducts;
