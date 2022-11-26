import Duck from '../AbstractClass/Duck';
import FlyWithWings from '../Interface/FlyWithWings';

export default class MallardDuck extends Duck {
  kind = 'Mallard Duck';

  flyBehavior = new FlyWithWings();

  fly() {
    this.flyBehavior.fly();
  }
}
