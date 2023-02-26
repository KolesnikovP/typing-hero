import { StateSchema } from 'app/providers/StoreProvider';

export const getSpeed = (state: StateSchema) => state.gameSession?.speed;
