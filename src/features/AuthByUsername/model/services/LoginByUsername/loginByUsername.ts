import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localHost } from 'shared/Constants/app.constants';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/Constants/localStorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
/*
 @createAsyncThunk - это функция, которая создает асинхронный экшен.
 В качестве первого аргумента она принимает название экшена,
 а вторым - функцию, которая будет выполняться при вызове этого экшена.
 Дженериками первым аргументом мы указываем тип данных, которые мы ожидаем получить в качестве ответа от сервера,
 а вторым - тип данных, которые мы ожидаем получить в качестве аргумента в функции, которая выполняется при вызове экшена.
*/

export interface LoginByUsernamePayload {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernamePayload, ThunkConfig<string>>(
  'login/loginByUsername', // @login-это название сущности, @loginByUsername-это название экшена
  async ({ username, password }, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error('Сервер не вернул данные');
      }

      // FixMe: Когда заедет бэк, нужно будет убрать этот костыль и хранить только токен в localStorage
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      dispatch(userActions.setAuthData(response.data));

      if (extra.navigate) {
        extra.navigate('/about');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
