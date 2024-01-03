import { createReducer } from 'reduxsauce';
import { Types as ProjectsTypes } from './index';
import { CartSchema, ProductOrder } from '../../types';

const {
  CREATE_CART,
  CREATE_CART_SUCCESS,
  CREATE_CART_FAILURE,

  SET_CART_STATE,
  SET_CART_STATE_SUCCESS,
  SET_CART_STATE_FAILURE,
} = ProjectsTypes;

const initialState: CartSchema = {
  allProducts: [],
  localProducts: [],
  totalElements: 0,
  loading: false,
  errorMessage: null,
};

const createCart = (state: any, { payload }: any) => {
  return {
    ...payload,
    loading: true,
    errorMessage: null,
  };
};

const createCartSuccess = (state: any, { payload }: any) => {
  return {
    ...payload,
    loading: false,
    errorMessage: null,
  };
};

const createCartFailure = (state: any, { error }: any) => ({
  ...state,
  loading: false,
  errorMessage: error,
});

const setCartState = (state: any) => ({
  ...state,
  loading: true,
  errorMessage: null,
});

const setCartStateSuccess = (state: CartSchema, { payload }: ProductOrder) => {
  const { id } = payload;
  console.log(id);
  const existingProductIndex = state.localProducts?.findIndex(({ id: localId }) => localId === id);
  console.log(existingProductIndex);
  if (existingProductIndex !== -1) {
    state.localProducts[existingProductIndex].quantity += 1;
  } else {
    state.localProducts = [...state.localProducts, payload];
  }
  return {
    ...state,
    loading: false,
    errorMessage: null,
  };
};

const setCartStateFailure = (state: any, { error }: any) => ({
  ...state,
  loading: false,
  errorMessage: error,
});

const CartReducer = createReducer(initialState, {
  [CREATE_CART]: createCart,
  [CREATE_CART_SUCCESS]: createCartSuccess,
  [CREATE_CART_FAILURE]: createCartFailure,

  [SET_CART_STATE]: setCartState,
  [SET_CART_STATE_SUCCESS]: setCartStateSuccess,
  [SET_CART_STATE_FAILURE]: setCartStateFailure,
});

export default CartReducer;
