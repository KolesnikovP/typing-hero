import { IgnoreKeys } from '../../Constants/typing.constants';

export function checkIgnoreKeys(eventKey: string): boolean {
  return eventKey in IgnoreKeys;
}
