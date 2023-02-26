import { StateSchema } from 'app/providers/StoreProvider';

export const getIsPreloaderActive = (state: StateSchema) => state.gameSession?.isPreloaderActive;
