import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum, CurrencyEnum } from 'shared/Constants/common';
import avatarTest from 'shared/assets/tests/storybookAvatar.jpeg';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

const mockData = {
  id: '1',
  title: 'subtitle',
};

describe('getArticleDetailsData.test', () => {
  test('should return article detail data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: mockData,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(mockData);
  });

  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state and return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
