// eslint-disable-next-line import/no-unresolved, import/extensions
import Position from './Position';

export default class Bridge {
  savedPositions: Array<Position>;

  constructor(positions: Array<Position>) {
    this.savedPositions = positions;
  }

  public addPosition(position: Position) {
    this.savedPositions.push(position);
  }

  public stringify() {
    return this.savedPositions.map((position) => position.getIndex());
  }
}
