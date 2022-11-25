import { Duck } from './Duck';
import { FlyWithWings } from './FlyBehavior/FlyWithWings';
import { Quack } from './QuackBehavior/Quack';
import { ModelDuck } from './ModelDuck';
import { FlyRocketPowered } from './FlyBehavior/FlyRocketPowered';

export class MiniDuckSimulator extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();

    this.performFly();
    this.performQuack();
  }

  setSimulatorToModel() {
    const model = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}
