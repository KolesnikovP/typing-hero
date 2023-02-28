import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import avatarTest from 'shared/assets/tests/storybookAvatar.jpeg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    firstname: 'Petr',
    lastname: 'Kolesnikov',
    age: 29,
    currency: CurrencyEnum.RUB,
    country: CountryEnum.Russia,
    city: 'St.Petersburg',
    nickname: 'admin',
    avatar: avatarTest,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
