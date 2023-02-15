import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { gameSessionReducer } from 'features/GameSession/model/slice/gameSessionSlice';
import { $api } from 'shared/api/api';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { StateSchema } from './StateSchema';

// мы обернули configureStore в нашу функцию чтоб потом использовать в сторибуке
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    gameSession: gameSessionReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // игнор для тайпскрипта, потому что в редаксе нет такого поля, позже сделаем свой тип
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
