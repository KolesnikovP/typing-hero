import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { getProfileIsLoading } from './getProfileIsLoading';

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('getProfileIsLoading.test', () => {
  test('should return isLoading: true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return isLoading: undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
