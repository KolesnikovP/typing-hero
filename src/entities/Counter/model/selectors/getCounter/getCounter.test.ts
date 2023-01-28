import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('getCounter', () => {
  test('should return counter', () => {
    // DeepPartial - это тип который позволяет указать что в объекте могут быть не все поля
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 1,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
  });
});
