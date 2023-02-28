import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { getProfileForm } from './getProfileForm';

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('getProfileForm.test', () => {
  test('should return form data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: mockData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(mockData);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
