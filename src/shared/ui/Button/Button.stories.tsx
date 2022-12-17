import React, { ReactNode } from 'react';
import { Button, ThemeButton } from './Button';

export default { };
interface ButtonProps {
  className?: string
  theme?: ThemeButton
}

const Template = (args: ButtonProps & {children: ReactNode}) => (
  // 👇 Your template goes here
  <Button {...args}>test</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Clear = Template.bind({});
Clear.args = {
  variant: 'secondary',
  theme: ThemeButton.CLEAR,
};

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
