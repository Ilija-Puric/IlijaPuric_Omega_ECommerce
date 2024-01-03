import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from '../../components/ListItem/ListItem';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { CartSchema } from '../../types';
import { Creators as CartCreators } from '../../store/Cart';
import { useMemo } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 100px 40px;
  color: #fff;

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
  const { localProducts }: CartSchema = useSelector(({ cart }) => cart);
  const { currentLoggedUser } = useSelector(({ auth }) => auth);

  const isCheckoutPossible = useMemo(() => {
    return currentLoggedUser && localProducts?.length > 0;
  }, [currentLoggedUser, localProducts]);

  const sumWithInitial = localProducts.reduce(function (acc, { price, quantity }) {
    return price * quantity + acc;
  }, 0);

  console.log('sum', sumWithInitial);
  return (
    <Wrapper className="checkout">
      <h1>Checkout</h1>
      <h2>Items</h2>
      {localProducts?.length > 0 ? (
        <>
          <ListWrapper total={localProducts?.length}>
            {localProducts?.map(({ id, description, price, thumbnail, quantity, title }) => (
              <ListItem
                key={id}
                id={id}
                description={description}
                price={price}
                thumbnail={thumbnail}
                quantity={quantity}
                title={title}
              />
            ))}
          </ListWrapper>
          <p className="checkout__total">Total: {sumWithInitial}$</p>
        </>
      ) : (
        <p>No items added to cart</p>
      )}
      {isCheckoutPossible && (
        <>
          <h2>Shipping</h2>
          <CheckoutForm />
        </>
      )}
      {!currentLoggedUser && (
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
