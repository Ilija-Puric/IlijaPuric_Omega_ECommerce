import { Header } from '../../stories/Header/Header';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Header
      user="Ilija"
      onCartClick={() => {
        navigate('/checkout');
      }}
      onFavoriteClick={() => {
        navigate('/favorites');
      }}
      onHomepageClick={() => {
        navigate('/');
      }}
      onLogin={() => {
        navigate('/login');
      }}
      onLogout={() => {
        navigate('/login');
      }}
    />
  );
};

export default Navigation;
