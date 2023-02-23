import axios from 'axios';
import {
  loginByUsername,
} from 'features/AuthByUsername/model/services/LoginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('axios');

// @ts-ignore
const mockedAxios = jest.mocked(axios, true);

describe('LoginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  // test('success login', async () => {
  //   const userValues = { username: 'username', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }));
  //   const action = loginByUsername({
  //     username: 'username',
  //     password: 'password',
  //   });
  //   const result = await action(dispatch, getState, undefined);
  //   console.log(result);
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValues));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValues);
  // });
  //
  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({
  //     username: 'username',
  //     password: 'password',
  //   });
  //   const result = await action(dispatch, getState, undefined);
  //   console.log(result);
  //
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });

  test('success login', async () => {
    const userValues = { username: 'username', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValues }));

    const result = await thunk.callThunk({
      username: 'username',
      password: 'password',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValues));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValues);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      username: 'username',
      password: 'password',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
