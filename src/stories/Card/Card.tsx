import { Button } from '../Button/Button';
import shoppingCartSvg from '../assets/shopping-cart.svg';
import heartEmpty from '../assets/heart-empty.svg';
import heartFull from '../assets/heart-fill.svg';

import './card.css';

type Sizes = 'small' | 'large' | 'medium';

interface CardProps {
  image: string;
  imageAlt: string;
  text: string;
  price: number;
  isFavorite: boolean;
  button: {
    label: string;
    onClick?: () => void;
    primary?: boolean;
    size?: Sizes;
    backgroundColor?: string;
    onClickFavorite?: () => void;
  };
}

export const Card = ({
  image,
  imageAlt,
  text,
  price,
  isFavorite = false,
  button: { label, onClick, primary = true, size = 'medium', backgroundColor, onClickFavorite },
}: CardProps) => (
  <div className="storybook-card">
    <img
      className="storybook-card__favorite"
      src={isFavorite ? heartFull : heartEmpty}
      alt="Favorite icon"
      onClick={onClickFavorite}
    />
    <img className="storybook-card__image" src={image} alt={imageAlt} />
    <div className="storybook-card__details">
      <p className="storybook-card__title">{text}</p>
      <p className="storybook-card__price">{price} $</p>
      <Button
        iconImage={shoppingCartSvg}
        label={label}
        onClick={onClick}
        primary={primary}
        size={size}
        backgroundColor={backgroundColor}
      />
    </div>
  </div>
);
