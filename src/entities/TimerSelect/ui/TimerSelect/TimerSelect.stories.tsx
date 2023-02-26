import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimerSelect } from './TimerSelect';

export default {
  title: 'entities/TimerSelect',
  component: TimerSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimerSelect>;

const Template: ComponentStory<typeof TimerSelect> = (args) => <TimerSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
