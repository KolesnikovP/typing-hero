import { action, observable } from 'mobx';

interface ITypingStore {
  next: boolean
  changeNext: (isNext: boolean) => void
}

export class TypingStore implements ITypingStore {
  @observable
    next: boolean = false;

  @action
  changeNext(isNext: boolean) {
    this.next = isNext;
  }
}
