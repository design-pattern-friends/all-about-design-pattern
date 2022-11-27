/* eslint-disable import/no-unresolved, import/extensions */
import Mode from './Mode';

export default class ModeHard extends Mode {
  public dictionary: { [key: string]: number } = {
    U: 3,
    N: 2,
    M: 1,
    D: 0,
  };
}
