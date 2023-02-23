import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData', // @login-это название сущности, @loginByUsername-это название экшена
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
