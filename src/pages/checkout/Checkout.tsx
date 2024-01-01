import styled from 'styled-components';
import ListItem from '../../components/ListItem/ListItem';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

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
`;

const Checkout = () => {
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
      <h2>Shipping</h2>
      <CheckoutForm />
    </Wrapper>
  );
};

export default Checkout;
