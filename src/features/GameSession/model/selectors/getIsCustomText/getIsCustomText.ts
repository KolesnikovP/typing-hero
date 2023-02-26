import { StateSchema } from 'app/providers/StoreProvider';

export const getIsCustomText = (state: StateSchema) => state.gameSession?.isCustomText;
