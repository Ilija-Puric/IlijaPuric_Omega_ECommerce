import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Navigation from './components/Navigation/Navigation';
import Checkout from './pages/checkout/Checkout';
import { Provider } from 'react-redux';
import configureStore from './store/CreateStore';

export const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
