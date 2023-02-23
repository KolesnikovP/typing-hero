import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleSwitch } from 'widgets/ToggleSwitch';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'widget/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const ToggleSwitchPrimary = Template.bind({});

ToggleSwitchPrimary.args = {};

export const ToggleSwitchShort = Template.bind({});

ToggleSwitchShort.args = {
  short: true,
};

export const ToggleSwitchPrimaryDark = Template.bind({});

ToggleSwitchPrimaryDark.args = {};
ToggleSwitchPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
