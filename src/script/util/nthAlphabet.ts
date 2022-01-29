export function nthAlphabet(nth: number, isUpperCase: boolean): string {
  return String.fromCharCode((isUpperCase ? 'A' : 'a').charCodeAt(0) + nth);
}
