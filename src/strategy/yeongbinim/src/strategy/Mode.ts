/* eslint-disable import/no-unresolved, import/extensions */
import Position from '../Position';
import Bridge from '../Bridge';
import { generateRandomNumber, makeStringSet } from '../utils';

export default abstract class Mode {
  public abstract dictionary: { [key: string]: number };

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
