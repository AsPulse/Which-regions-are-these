export function randomChoice<T>(array: T[], choices: number): T[] {
  const copy = array.slice();
  return Array(choices)
    .fill(undefined)
    .map(() => copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
}
