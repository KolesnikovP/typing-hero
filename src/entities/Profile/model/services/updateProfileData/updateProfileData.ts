import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/types/validate';
import {
  validateProfileData,
} from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
  >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const {
        extra, rejectWithValue, getState,
      } = thunkAPI;
      // В компонентах для получения стейта мы используем useSelector, а внутри санок getState
      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
    },
  );
