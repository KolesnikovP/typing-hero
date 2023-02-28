import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { ValidateProfileError } from 'entities/Profile';
import { getValidateProfileErrors } from './getValidateProfileErrors';

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('getValidateProfileErrors.test', () => {
  test('should return readonly: true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_USER_AGE,
        ],
      },
    };
    expect(getValidateProfileErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_AGE,
    ]);
  });
  test('should with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
  });
});
