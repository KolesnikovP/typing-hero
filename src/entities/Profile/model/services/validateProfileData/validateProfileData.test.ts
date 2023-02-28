import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { ValidateProfileError } from 'entities/Profile';
import {
  validateProfileData,
} from './validateProfileData';

jest.mock('axios');

const mockData = {
  firstname: 'Petr',
  lastname: 'Kolesnikov',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'St.Petersburg',
  nickname: 'admin',
};

describe('validateProfileData.test', () => {
  test('when data is correct', async () => {
    const result = validateProfileData(mockData);

    expect(result).toEqual([]);
  });

  test('when data without first name and last name ', async () => {
    const result = validateProfileData({ ...mockData, firstname: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('when data has incorrect age', async () => {
    const result = validateProfileData({ ...mockData, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE,
    ]);
  });

  test('when all is incorrect', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_COUNTRY,
    ]);
  });
});
