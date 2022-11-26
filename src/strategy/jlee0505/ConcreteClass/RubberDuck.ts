import Duck from '../AbstractClass/Duck';
import FlyNoWay from '../Interface/FlyNoWay';

export default class RubberDuck extends Duck {
  kind = 'Rubber Duck';

  flyBehavior = new FlyNoWay();

  fly() {
    this.flyBehavior.fly();
  }
}
