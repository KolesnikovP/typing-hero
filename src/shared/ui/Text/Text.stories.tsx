import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Primary title text',
  text: 'Primary text text',
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'title text',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
  text: 'text text',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  title: 'Primary title text',
  text: 'Primary text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
  title: 'title text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
  text: 'text text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});

Error.args = {
  title: 'Primary title text',
  text: 'Primary text text',
  theme: TextTheme.ERROR,
};

export const Secondary = Template.bind({});

Secondary.args = {
  title: 'Secondary title text',
  text: 'Secondary text text',
  theme: TextTheme.SECONDARY,
};