import { createReducer } from 'reduxsauce';
import { Types as ProjectsTypes } from './index';
import { FavoriteSchema, ProductsPayload } from '../../types';

const {
  LIKE_PRODUCT,
  LIKE_PRODUCT_SUCCESS,
  LIKE_PRODUCT_FAILURE,

  UNLIKE_PRODUCT,
  UNLIKE_PRODUCT_SUCCESS,
  UNLIKE_PRODUCT_FAILURE,
} = ProjectsTypes;

const initialState: FavoriteSchema = {
  allFavorites: [],
  favorite: null,
  loading: false,
  errorMessage: null,
};

const likeProduct = (state: any) => ({
  ...state,
  errorMessage: null,
  loading: true,
});

const likeProductSuccess = (state: any, { payload }: any) => {
  console.log(payload);
  const existingProductIndex = state.allFavorites?.findIndex((id: number) => id === payload);
  if (existingProductIndex === -1) {
    console.log('LIKED ');
    state.allFavorites = [...state.allFavorites, payload];
  } else {
    console.log('UNLIKED');
    state.allFavorites.splice(existingProductIndex, 1);
  }
  return {
    ...state,
    loading: false,
    errorMessage: null,
  };
};

const likeProductFailure = (state: any, { error }: any) => ({
  ...state,
  loading: false,
  errorMessage: error,
});

const unlikeProduct = (state: any) => ({
  ...state,
  loading: true,
  errorMessage: null,
});

const unlikeProductSuccess = (state: any, { payload }: any) => {
  return {
    ...state,
    product: payload,
    loading: false,
    errorMessage: null,
  };
};

const unlikeProductFailure = (state: any, { error }: any) => ({
  ...state,
  loading: false,
  errorMessage: error,
});

const FavoritesReducer = createReducer(initialState, {
  [LIKE_PRODUCT]: likeProduct,
  [LIKE_PRODUCT_SUCCESS]: likeProductSuccess,
  [LIKE_PRODUCT_FAILURE]: likeProductFailure,

  [UNLIKE_PRODUCT]: unlikeProduct,
  [UNLIKE_PRODUCT_SUCCESS]: unlikeProductSuccess,
  [UNLIKE_PRODUCT_FAILURE]: unlikeProductFailure,
});

export default FavoritesReducer;
