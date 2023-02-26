export interface GameSessionSchema {
  typingText: (string | number)[]
  isStarted: boolean
  mistakes: number
  sumLetters: number
  speed: number
  // @timer - выбранное юзером время длинны сессии
  timer: number
  // @isCustomText - если true то используем текст юзера, а не дефолтные текста
  isCustomText: boolean
  charsTyped: number
  isPreloaderActive: boolean
}
