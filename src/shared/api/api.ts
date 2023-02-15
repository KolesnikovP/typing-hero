import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/Constants/localStorage';
import { localHost } from 'shared/Constants/app.constants';

// @baseUrl - это один из вариантов. Есть более правильный через глобальную переменную __API__
const baseUrl = __IS_DEV__ ? localHost : 'https//:my-production-host.ru';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
});
