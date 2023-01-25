import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

// здесь реселект использовать было необязательно - просто для разбора использовал
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
