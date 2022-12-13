import React from 'react';
import { Button, ThemeButton } from './Button';

export default { };
interface ButtonProps {
  className?: string
  theme?: ThemeButton
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  // label: string;
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonStories = ({
  className = 'button',
  theme = ThemeButton.CLEAR,
  ...props
}: ButtonProps) => (
  <Button
    type='button'
    className={['storybook-button', `storybook-button--${className}`].join(' ')}
    theme={ThemeButton.CLEAR}
    // style={{ backgroundColor }}
    {...props}
  >
    TEst
  </Button>
);
