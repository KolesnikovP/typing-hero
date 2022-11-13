import { classNames } from './classNames';

describe('classNames', () => {
  test('base', () => {
    expect(classNames('test')).toBe('test');
  });
  test('with only first param', () => {
    expect(classNames('test', {}, ['testClass'])).toBe('test testClass');
  });
  test('with mods class', () => {
    const expected = 'test additionalClass modsClass';
    expect(classNames('test', { modsClass: true }, ['additionalClass'])).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'test additionalClass modsClass';
    expect(classNames('test', { modsClass: true, hovered: false }, ['additionalClass'])).toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'test additionalClass modsClass';
    expect(classNames('test', { modsClass: true, hovered: undefined }, ['additionalClass'])).toBe(expected);
  });
});
