import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSessionSchema } from 'features/GameSession/model/types/GameSessionSchema';
import { generateText } from 'shared/assets/mocs/moc';

const initialState: GameSessionSchema = {
  typingText: generateText().split(''),
  mistakes: 0,
  sumLetters: 0,
  charsTyped: 0,
  isStarted: false,
  speed: 0,
  timer: 30,
  isCustomText: false,
  isPreloaderActive: false,
};

export const gameSessionSlice = createSlice({
  name: 'gameSession',
  initialState,
  reducers: {
    // @PayloadAction - это тип, который используется для передачи данных в экшене. Он позволяет определить
    // что мы ожидаем получить в качестве данных в экшене.
    setTypingText: (state, action: PayloadAction<(string|number)[] | string>) => {
      if (typeof action.payload === 'string') {
        state.typingText = action.payload.split('');
      } else {
        state.typingText = action.payload;
      }
    },
    setMistakeCount: (state) => {
      state.mistakes += 1;
    },
    setLetterCount: (state, action: PayloadAction<(string | number)[]>) => {
      state.sumLetters = action.payload.length;
    },
    setIsStarted: (state, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload;
    },
    setIsPreloadActive: (state, action: PayloadAction<boolean>) => {
      state.isPreloaderActive = action.payload;
    },
    setCharsTyped: (state) => {
      state.charsTyped += 1;
    },
    setSpeed: (state) => {
      // const charsTyped = action.payload;
      state.speed = state.charsTyped / (state.timer / 60);
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setIsCustomText: (state, action: PayloadAction<boolean>) => {
      state.isCustomText = action.payload;
      if (!state.isCustomText) {
        state.typingText = generateText().split('');
      }
    },
    setInitialState: (state) => {

    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: gameSessionActions } = gameSessionSlice;
export const { reducer: gameSessionReducer } = gameSessionSlice;
