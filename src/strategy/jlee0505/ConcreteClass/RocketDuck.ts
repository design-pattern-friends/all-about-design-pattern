import Duck from '../AbstractClass/Duck';
import FlyOnEngine from '../Interface/Fly/FlyOnEngine';
import IntroFakeDuck from '../Interface/Introduce/IntroFakeDuck';

export default class RocketDuck extends Duck {
  kind = 'Rocket Duck';

  flyBehavior = new FlyOnEngine();

  introduceBehavior = new IntroFakeDuck();

  fly() {
    this.flyBehavior.fly();
  }

  introduce() {
    this.introduceBehavior.introduce(this.kind);
  }
}
