import { Duck } from './Duck';
import { FlyNoWay } from './FlyBehavior/FlyNoWay';
import { Quack } from './QuackBehavior/Quack';

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();

    this.performFly();
    this.performQuack();
  }

  public display(): void {
    console.log('저는 모형오리입니다.');
  }
}
