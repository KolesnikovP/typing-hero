# mobx - есть пара приколюх по настройке базового конфига
[mobx start - link](https://javascript.plainenglish.io/all-you-need-is-mobx-react-lite-47ba0e95e9c8)
### For example 
```typescript
export const useStore = <T extends keyof typeof stores>(store: T): typeof stores[T] =>
  React.useContext(storesContext)[store]
```
тут будут подставляться только те сторы ключи которых есть в наших сторах - как то так

### В браузерной консоли были варнинги из девтулзов на мобикс - я добавил в ВП конфиг еще один лоадер - source-map-loader надо посмотреть не сломалось ли что- то ###
