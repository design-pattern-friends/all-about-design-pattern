/* eslint-disable import/no-unresolved, import/extensions */
import Mode from './Mode';

export default class ModeEasy extends Mode {
  public dictionary: { [key: string]: number } = {
    U: 1,
    D: 0,
  };
}
