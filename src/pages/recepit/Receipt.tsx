import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CartProduct, CartSchema } from '../../types';
import { Creators as CartCreators } from '../../store/Cart';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../stories/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
  padding: 100px 50px;
  width: 90%;
  min-width: 250px;
  max-width: 900px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  height: 80%;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    width: 200px;
  }

  .receipt__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .receipt__item {
    width: 100%;
    height: 150px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    img {
      height: 100%;
      width: 300px;
      object-fit: cover;
      border-radius: 8px;
    }
    .receipt__details {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  .text--indicator {
    color: #ff590b;
  }
`;

const Receipt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    allProducts,
    id,
    loading,
    totalProducts,
    totalQuantity,
    total,
    address,
    phoneNumber,
    additionalMessage,
  }: CartSchema = useSelector(({ cart }) => cart);

  console.log('CART BOUGHT', { id, allProducts, loading, totalProducts });
  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      {!loading ? (
        <>
          <h1>Receipt</h1>
          <div className="receipt__recipient">
            <h3 className="text--indicator">Recipient</h3>
            <p>Adress: {address}</p>
            <p>Phone number: {phoneNumber}</p>
            {additionalMessage && <p>{additionalMessage}</p>}
          </div>
          <ul className="receipt__items">
            <>
              {allProducts?.map(({ thumbnail, price, title, quantity, total }) => {
                return (
                  <li className="receipt__item">
                    <img src={thumbnail} alt="" />
                    <div className="receipt__details">
                      <p>{title}</p>
                      <p>Quantity:{quantity}</p>
                      <p>Price: ${price}</p>
                      <p>Sum: ${total}</p>
                    </div>
                  </li>
                );
              })}
            </>
          </ul>
          <div className="receipt__calculations">
            <h3 className="text--indicator">Details</h3>
            <p>Total products:{totalProducts}</p>
            <p>Total quantity:{totalQuantity}</p>
            <p>Total {total}$</p>
          </div>
          <Button label="Go back" onClick={onClickHandler} primary />
        </>
      ) : (
        <div>loading</div>
      )}
    </Wrapper>
  );
};

export default Receipt;
