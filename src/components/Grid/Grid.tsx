import styled from 'styled-components';
import { Card } from '../../stories/Card/Card';
import productImage from '../../stories/assets/product.jpg';
import { useState } from 'react';

const Grid = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    padding: 50px 40px;
  `;
  const [isFill, setIsFill] = useState(false);
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Grid>
      {arr.map((el, index) => (
        <Card
          isFavorite={isFill}
          key={index}
          image={productImage}
          imageAlt="Tim Hensen model"
          price={30}
          text="Tim Hensen Gitara"
          button={{
            label: 'Add to cart',
            onClickFavorite: () => setIsFill((prevState) => !prevState),
          }}
        />
      ))}
    </Grid>
  );
};

export default Grid;
