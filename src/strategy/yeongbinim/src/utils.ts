export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function makeStringSet(
  size: number,
  generateNumber: (min: number, max: number) => number,
  dictionary: { [key: string]: number },
): Array<string> {
  const reverseDictionary: { [key: number]: string } = Object.fromEntries(
    Object.entries(dictionary).map((item) => item.reverse()),
  );
  return Array.from({ length: size }).map(
    () =>
      reverseDictionary[
        generateNumber(0, Object.entries(dictionary).length - 1)
      ],
  );
}

export function printMap(data: Array<number>, width: number): void {
  if (data.length === 0) throw new Error('[ERROR] 잘못된 값 출력');
  const result: Array<Array<string>> = Array.from({ length: width }, () => []);
  data.forEach((level) =>
    result.forEach((line, j) => line.push(level === j ? 'O' : ' ')),
  );
  console.log(
    result
      .reverse()
      .map((line) => `[ ${line.join(' | ')} ]`)
      .join('\n'),
  );
}
