import { Duck } from './Duck';
import { FlyWithWings } from './FlyBehavior/FlyWithWings';
import { Quack } from './QuackBehavior/Quack';

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('저는 물 오리입니다.');
  }
}
