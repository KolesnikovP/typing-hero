import { StateSchema } from 'app/providers/StoreProvider';

export const getGameSessionMistakes = (state: StateSchema) => state.gameSession?.mistakes;
