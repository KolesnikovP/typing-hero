import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { loginByUsername } from '../services/LoginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  email: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // @PayloadAction - это тип, который используется для передачи данных в экшене. Он позволяет определить
    // что мы ожидаем получить в качестве данных в экшене.
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
