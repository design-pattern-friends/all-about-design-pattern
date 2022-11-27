import { Duck } from './Duck';
import { FlyNoWay } from './FlyBehavior/FlyNoWay';
import { MiniQuack } from './QuackBehavior/MiniQuack';

export class MiniDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MiniQuack();
  }

  public display(): void {
    console.log("I'm a mini duck");
  }
}
