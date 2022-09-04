import React from 'react'
import { stores, storesContext } from '../Store/stores'

export const useStores = () => React.useContext(storesContext)

// Я не до конца понял эту конструкцию. Данный хук отдаст нам конкретный стор и если один из ключей
// stores объекта котороый мы описали в stores.ts - пока знаний тс не хватает (
export const useStore = <T extends keyof typeof stores>(store: T): typeof stores[T] =>
  React.useContext(storesContext)[store]
