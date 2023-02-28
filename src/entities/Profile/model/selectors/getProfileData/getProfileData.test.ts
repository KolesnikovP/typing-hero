import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import avatarTest from 'shared/assets/tests/storybookAvatar.jpeg';
import { getProfileData } from './getProfileData';

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: mockData,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(mockData);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
