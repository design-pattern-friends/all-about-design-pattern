/* eslint-disable import/no-unresolved, import/extensions */
import Mode from './Mode';

export default class ModeNormal extends Mode {
  public dictionary: { [key: string]: number } = {
    U: 2,
    M: 1,
    D: 0,
  };
}
