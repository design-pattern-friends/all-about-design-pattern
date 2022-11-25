import IMoveBehavior from './ImoveBehavior';

export default class FastMove implements IMoveBehavior {
  moveType = '유체화 슝슝';

  move() {
    console.log(this.moveType);
  }
}
