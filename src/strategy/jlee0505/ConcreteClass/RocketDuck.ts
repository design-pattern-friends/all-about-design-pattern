import Duck from '../AbstractClass/Duck';
import FlyOnEngine from '../Interface/FlyOnEngine';

export default class RocketDuck extends Duck {
  kind = 'Rocket Duck';

  flyBehavior = new FlyOnEngine();

  fly() {
    this.flyBehavior.fly();
  }
}
