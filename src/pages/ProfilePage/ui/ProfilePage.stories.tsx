import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import avatarTest from 'shared/assets/tests/storybookAvatar.jpeg';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      firstname: 'Petr',
      lastname: 'Kolesnikov',
      age: 29,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'St.Petersburg',
      nickname: 'admin',
      avatar: avatarTest,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      firstname: 'Petr',
      lastname: 'Kolesnikov',
      age: 29,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.Russia,
      city: 'St.Petersburg',
      nickname: 'admin',
      avatar: avatarTest,
    },
  },
})];
