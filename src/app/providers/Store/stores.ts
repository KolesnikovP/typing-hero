import React from 'react';
import { TypingStore } from './Typing.store';

export const stores = Object.freeze({
  typingStore: new TypingStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
