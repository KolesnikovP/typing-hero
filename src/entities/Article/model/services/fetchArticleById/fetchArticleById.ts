import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error('Сервер не дал ответа');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
