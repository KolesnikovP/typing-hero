export const mocTexts: Array<string> = [
  'This template would provide users with more challenging typing exercises to help them improve their skills. The app would display longer paragraphs or passages and users would be required to type them accurately and quickly. The app would also include features such as timed exercises and the ability to customize the difficulty level.',
  // eslint-disable-next-line max-len
  'Trolls are attacking 2 your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls comments, neutralizing the threat Your task is to write a function that takes a string and return a new string with all vowels removed.',
  'This template would allow users to create their own typing exercises. Users could input their own text or choose from a library of pre-made exercises. The app would track their performance and provide feedback on their typing speed and accuracy.',
  'This template would provide users with a simple and straightforward typing exercise. The app would display a short paragraph or sentence and users would be required to type it as accurately and quickly as possible. The app would track their typing speed and accuracy and provide feedback on their performance.',
];

export const generateText = (): string => {
  const random = Math.floor(Math.random() * (mocTexts.length));
  return mocTexts[random];
};
