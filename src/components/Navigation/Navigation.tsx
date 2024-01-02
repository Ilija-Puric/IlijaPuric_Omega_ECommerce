import { useSelector } from 'react-redux';
import { Header } from '../../stories/Header/Header';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentLoggedUser } = useSelector(({ auth }) => auth);
  let user = '';
  if (currentLoggedUser) user = currentLoggedUser?.image;
  console.log(user);

  return (
    <Header
      user={user}
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
        navigate('/');
      }}
    />
  );
};

export default Navigation;
