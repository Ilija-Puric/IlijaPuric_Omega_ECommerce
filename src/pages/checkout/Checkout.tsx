import styled from 'styled-components';
import ListItem from '../../components/ListItem/ListItem';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 100px 40px;
  color: #fff;
  max-width: 900px;

  .checkout__total {
    font-weight: 800;
    width: 100%;
    border-bottom: 2px solid #fff;
    padding-bottom: 12px;
  }
  .checkout__link {
    color: #ff9d1c;
    text-decoration: none;
    position: relative;
    margin-left: 4px;

    &::after {
      content: '';
      bottom: -5px;
      left: 0;
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #ff9d1c;

      transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const Checkout = () => {
  const { currentLoggedUser } = useSelector(({ auth }) => auth);
  console.log(currentLoggedUser);
  return (
    <Wrapper className="checkout">
      <h1>Checkout</h1>
      <h2>Items</h2>
      <ListWrapper>
        {[1, 1, 1].map((el) => (
          <ListItem />
        ))}
      </ListWrapper>
      <p className="checkout__total">Total: 240$</p>
      {currentLoggedUser ? (
        <>
          <h2>Shipping</h2>
          <CheckoutForm />
        </>
      ) : (
        <div>
          <p>
            You need to be logged in to make a shipment,
            <Link to="/login" className="checkout__link">
              log in
            </Link>
          </p>
        </div>
      )}
    </Wrapper>
  );
};

export default Checkout;
