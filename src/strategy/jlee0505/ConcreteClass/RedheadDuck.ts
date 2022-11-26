import Duck from '../AbstractClass/Duck';
import FlyWithWings from '../Interface/FlyWithWings';

export default class RedheadDuck extends Duck {
  kind = 'Redhead Duck';

  flyBehavior = new FlyWithWings();

  fly() {
    this.flyBehavior.fly();
  }
}
