import { StateSchema } from 'app/providers/StoreProvider';
// Тут с виду мы нарушаем патерн fsd который запрещает использовать в нижестоящих слоях вышестоящие
// Но для типов есть исключение

export const getCounter = (state: StateSchema) => state.counter;
