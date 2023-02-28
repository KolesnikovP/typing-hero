import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import { ValidateProfileError } from 'entities/Profile';
import {
  updateProfileData,
} from './updateProfileData';

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

describe('updateProfileData.test', () => {
  test('success fetch update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: mockData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: mockData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockData);
  });

  test('failed when calling with undefined', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: mockData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...mockData, lastname: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
