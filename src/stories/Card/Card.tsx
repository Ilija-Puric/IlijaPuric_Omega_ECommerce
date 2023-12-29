import { Button } from '../Button/Button';
import shoppingCartSvg from '../assets/shopping-cart.svg';
import heartSvg from '../assets/heart.svg';
import './card.css';

type Sizes = 'small' | 'large' | 'medium';

interface CardProps {
  image: string;
  imageAlt: string;
  text: string;
  price: number;
  button: {
    label: string;
    onClick?: () => void;
    primary?: boolean;
    size?: Sizes;
    backgroundColor?: string;
  };
}

export const Card = ({
  image,
  imageAlt,
  text,
  price,
  button: { label, onClick, primary = true, size = 'medium', backgroundColor },
}: CardProps) => (
  <div className="storybook-card">
    <img className="storybook-card__favorite" src={heartSvg} alt="Favorite icon" />
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
