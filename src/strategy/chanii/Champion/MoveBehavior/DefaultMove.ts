import IMoveBehavior from './ImoveBehavior';

export default class DefaultMove implements IMoveBehavior {
  moveType = '걷는 중';

  move() {
    console.log(this.moveType);
  }
}
