import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

// мы обернули configureStore в нашу функцию чтоб потом использовать в сторибуке
export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
