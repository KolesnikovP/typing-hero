export interface GameSessionSchema {
  typingText: (string | number)[]
  isStarted: boolean
  mistakes: number
  sumLetters: number
}
