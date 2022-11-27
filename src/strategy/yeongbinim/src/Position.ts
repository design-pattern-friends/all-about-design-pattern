export default class Position {
  private index: number;

  constructor(index: number) {
    this.index = index;
  }

  public getIndex(): number {
    return this.index;
  }
}
