import { StateSchema } from 'app/providers/StoreProvider';

export const getTypingText = (state: StateSchema) => state.gameSession?.typingText;
