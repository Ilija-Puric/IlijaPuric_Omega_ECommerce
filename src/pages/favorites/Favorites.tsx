import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FavoriteSchema } from '../../types';

const Wrapper = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  padding: 100px 40px;
  color: #fff;

  .favorites-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`;
const Favorites = () => {
  const { allFavorites }: FavoriteSchema = useSelector(({ favorites }) => favorites);
  console.log(allFavorites);
  return (
    <Wrapper>
      <h1>Favorites</h1>
      <ul className="favorites-list">
        <li>
          <img src="" alt="" />
          <p className="favorites-list__title">Title</p>
          <p className="favorites-list__brand">Brand</p>
          <p className="favorites-list__rating">Rating</p>
          <p className="favorites-list__price">Price</p>
        </li>
        <li>
          <img src="" alt="" />
          <p className="favorites-list__title">Title</p>
          <p className="favorites-list__brand">Brand</p>
          <p className="favorites-list__rating">Rating</p>
          <p className="favorites-list__price">Price</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Favorites;
