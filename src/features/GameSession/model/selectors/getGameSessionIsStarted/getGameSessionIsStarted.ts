import { StateSchema } from 'app/providers/StoreProvider';

export const getGameSessionIsStarted = (state: StateSchema) => state.gameSession.isStarted;
