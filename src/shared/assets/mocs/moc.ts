export const mocTexts: Array<string> = [
  'f the 2 same component is used as the child of multiple ',
  // eslint-disable-next-line max-len
  'Trolls are attacking  2 your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls comments, neutralizing the threat Your task is to write a function that takes a string and return a new string with all vowels removed.',
];

export const generateText = (): string => {
  const random = Math.floor(Math.random() * (mocTexts.length));
  return mocTexts[random];
};
