import { action, observable } from 'mobx'

interface ITypingStore {
  next: boolean
  changeNext: () => void
}

export class TypingStore implements ITypingStore {
  @observable
  next: boolean = false

  @action
  changeNext() {
    this.next = !this.next
  }
}
