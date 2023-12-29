import './button.css';

interface ButtonProps {
  primary?: boolean;
  /** What background color to use*/
  backgroundColor?: string;
  /**How large should the button be?*/
  size?: 'small' | 'medium' | 'large';
  /*** Button contents*/
  label: string;
  iconImage?: string;
  /*** Optional click handler*/
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  iconImage,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {iconImage && <img src={iconImage} alt="Missing icon image" />}
      <span>{label}</span>
    </button>
  );
};
