export function convertMinuteToSecond(minutes: number): number {
  const seconds = Math.floor(minutes * 60);
  return seconds;
}
