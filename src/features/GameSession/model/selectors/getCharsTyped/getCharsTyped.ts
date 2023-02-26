import { StateSchema } from 'app/providers/StoreProvider';

export const getCharsTyped = (state: StateSchema) => state.gameSession?.charsTyped;
