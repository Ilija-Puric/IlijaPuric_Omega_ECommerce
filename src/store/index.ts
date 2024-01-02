import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import AlertMessageReducer from './AlertMessage/Reducer';
import AuthReducer from './Auth/Reducer';
import ProductReducer from './Product/Reducer';

const history = createBrowserHistory();

export default combineReducers({
  router: connectRouter(history),
  alertMessage: AlertMessageReducer,
  auth: AuthReducer,
  products: ProductReducer,
});
