import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedTimer = (state: StateSchema) => state.gameSession?.timer;
