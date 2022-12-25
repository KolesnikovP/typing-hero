import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

interface ButtonProps {
  className?: string
  theme?: ButtonTheme
}

// const Template = (args: ButtonProps & {children: ReactNode}) => (
//   // 👇 Your template goes here
//   <Button {...args}>test</Button>
// );

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

/**
 * Primary UI component for user interaction
 */
export const ButtonStories = ({
  className = 'button',
  theme = ButtonTheme.CLEAR,
  ...props
}: ButtonProps) => (
  <Button
    type='button'
    className={['storybook-button', `storybook-button--${className}`].join(' ')}
    theme={ButtonTheme.CLEAR}
    // style={{ backgroundColor }}
    {...props}
  >
    TEst
  </Button>
);
