import productImage from '../../stories/assets/product.jpg';
import trashIcon from '../../assets/trash.svg';
import styled from 'styled-components';
import { Button } from '../../stories/Button/Button';
import { LocalProduct } from '../../types';

const Item = styled.li`
  border: 2px solid #ffffff24;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;

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
    object-fit: cover;
    border-radius: 4px;
  }
`;
const ListItem = ({ id, price, quantity, thumbnail, title }: LocalProduct) => {
  return (
    <Item>
      <Button label="" iconImage={trashIcon} />
      <div className="list-item__info">
        <img src={thumbnail} alt={title} />
        <p className="list-item__title">{title}</p>
        <p className="list-item__quantity">Quantity: {quantity}</p>
        <p className="list-item__sum">Sum: {price}$</p>
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
    </Item>
  );
};

export default ListItem;
