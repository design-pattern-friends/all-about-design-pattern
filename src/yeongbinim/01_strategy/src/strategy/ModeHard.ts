/* eslint-disable import/no-unresolved, import/extensions */
import Mode from './Mode';
import Position from '../Position';
import Bridge from '../Bridge';
import { generateRandomNumber, makeStringSet } from '../utils';

export default class ModeHard implements Mode {
  private dictionary: { [key: string]: number } = {
    U: 3,
    N: 2,
    M: 1,
    D: 0,
  };

  public createPosition(sign: string): Position {
    if (!(sign in this.dictionary))
      throw new Error('[ERROR] 지정된 커맨드를 입력해주세요.');
    return new Position(this.dictionary[sign]);
  }

  public createBridge(size: number) {
    return new Bridge(
      makeStringSet(size, generateRandomNumber, this.dictionary).map(
        this.createPosition.bind(this),
      ),
    );
  }

  public getBridgeWidth(): number {
    return Object.entries(this.dictionary).length;
  }
}
