import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import inputReset from '../../constants';
import { Button } from '../../stories/Button/Button';
import productImage from '../../stories/assets/product.jpg';
import trashIcon from '../../assets/trash.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF590B',
      contrastText: '#fff0ec',
    },
  },
});

const Checkout = () => {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: 100%;
    ${inputReset}
  `;

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

  const ListItems = styled.ul`
    display: flex;
    gap: 12px;
    list-style: none;
    padding-left: 0;
    flex-wrap: wrap;
  `;

  const ListItem = styled.li`
    border: 2px solid #ffffff24;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    position: relative;

    > button {
      height: fit-content;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #ff3a44;
      outline: 2px solid #ff3a44;
      padding: 20px;
      border-radius: 6px;
      img {
        position: absolute;
        width: 70%;
        height: 70%;
      }
    }
    > div {
      display: flex;
      gap: 12px;
      align-items: center;
      width: 100%;

      button {
        width: 100%;
      }
    }
    .list-item__info {
      flex-direction: column;
      align-items: flex-start;
    }
    .list-item__quantity,
    .list-item__sum {
      color: #ffffff7a;
    }

    img {
      height: 150px;
      width: 100%;
    }
  `;

  return (
    <Wrapper className="checkout">
      <h1>Checkout</h1>
      <h2>Items</h2>
      <ListItems>
        <ListItem>
          <Button label="" iconImage={trashIcon} />
          <div className="list-item__info">
            <img src={productImage} alt="Gitara" />
            <p className="list-item__title">Item</p>
            <p className="list-item__quantity">Quantity: 4</p>
            <p className="list-item__sum">Sum: 240$</p>
          </div>
          <div>
            <Button
              onClick={() => {
                console.log('clicked el');
              }}
              label="+1"
              primary={false}
              outlined={true}
            />
            <Button
              onClick={() => {
                console.log('clicked el');
              }}
              label="-1"
              primary={false}
              outlined={true}
            />
          </div>
        </ListItem>
      </ListItems>
      <p className="checkout__total">Total: 240$</p>
      <h2>Shipping</h2>
      <Form>
        <ThemeProvider theme={theme}>
          <TextField id="address" label="Address" variant="outlined" fullWidth />
          <TextField id="phoneNumber" label="Phone Number" variant="outlined" fullWidth />
          <TextField id="additionalMessage" label="Additional message *" variant="outlined" fullWidth />
          <Button
            primary
            label="Buy"
            onClick={() => {
              console.log('buy');
            }}
          />
        </ThemeProvider>
      </Form>
    </Wrapper>
  );
};

export default Checkout;
