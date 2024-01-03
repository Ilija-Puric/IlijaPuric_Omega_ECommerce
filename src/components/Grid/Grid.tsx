import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

import { Card } from '../../stories/Card/Card';
import { Creators as ProductCreators } from '../../store/Product';
import { Creators as CartCreators } from '../../store/Cart';
import NotFoundSvg from '../NotFoundSvg/NotFoundSvg';
import { ProductSchema } from '../../types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 80px;
  padding: 50px 40px;
  position: relative;

  &.wrapper--shrink {
    grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
  }
  .wrapper__not-found {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    height: 80vh;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    svg {
      width: 450px;
      margin: 0 auto;
    }
    .wrapper__not-found__text {
      text-align: center;
      color: #fff;
      font-weight: 300;
      font-size: 28px;
    }
  }
`;

const { getAllProducts } = ProductCreators;
const { setCartState } = CartCreators;

const Grid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProducts, loading, totalElements }: ProductSchema = useSelector(({ products }) => products);

  const isProductsAvailable = useMemo(() => {
    return !loading && allProducts && allProducts.length > 0;
  }, [loading, allProducts]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper className={`${totalElements <= 4 && totalElements > 0 ? 'wrapper--shrink' : ''}`}>
      {isProductsAvailable &&
        allProducts?.map(({ id, thumbnail, price, title }) => (
          <Card
            key={id}
            image={thumbnail}
            imageAlt={title}
            price={price}
            text={title}
            onCardClick={() => {
              navigate(`/product/${id}`);
            }}
            button={{
              label: 'Add to cart',
              onClickFavorite: () => console.log('API CALL'),
              onClick: () => {
                console.log('CLICKED BTN');
                dispatch(setCartState({ data: { id, thumbnail, price, title, quantity: 1 }, action: 'add' }));
              },
            }}
          />
        ))}
      {loading && <CircularProgress sx={{ color: '#ff590b' }} />}
      {!loading && allProducts?.length === 0 && (
        <div className="wrapper__not-found">
          <NotFoundSvg />
          <p className="wrapper__not-found__text">No results</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Grid;
