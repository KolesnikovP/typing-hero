import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { getProfileReadonly } from './getProfileReadonly';

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
  test('should return readonly: true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('should return readonly: undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
