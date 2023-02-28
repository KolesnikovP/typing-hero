import {
  profileActions,
  profileReducer,
  ProfileSchema,
  updateProfileData,
  ValidateProfileError,
} from 'entities/Profile';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });

  test('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data: mockData, form: { firstname: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data: mockData,
        form: mockData,
      });
  });

  test('test set update data', () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstname: 'test' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      firstname: 'test123',
    })))
      .toEqual({
        form: { firstname: 'test123' },
      });
  });

  test('test set update data service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('test set update data service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(mockData, '')))
      .toEqual({
        isLoading: false,
        readonly: true,
        validateErrors: undefined,
        validateError: undefined,
        form: mockData,
        data: mockData,
      });
  });
});
