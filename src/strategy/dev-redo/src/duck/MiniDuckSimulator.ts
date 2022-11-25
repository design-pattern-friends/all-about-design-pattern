import { Duck } from './Duck';
import { FlyWithWing } from './FlyBehavior/FlyWithWing';
import { Quack } from './QuackBehavior/Quack';
import { ModelDuck } from './ModelDuck';
import { FlyRocketPowered } from './FlyBehavior/FlyRocketPowered';

export class MiniDuckSimulator extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWing();
    this.quackBehavior = new Quack();

    this.performFly();
    this.performQuack();

    this.model = new ModelDuck();
    this.model.performFly();
    this.model.setFlyBehavior(new FlyRocketPowered());
    this.model.performFly();
  }

  public display(): void {
    console.log('저는 모형오리입니다.');
  }
}
