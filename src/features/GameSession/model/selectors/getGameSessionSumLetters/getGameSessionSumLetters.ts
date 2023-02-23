import { StateSchema } from 'app/providers/StoreProvider';

export const getGameSessionSumLetters = (state: StateSchema) => state.gameSession.sumLetters;
