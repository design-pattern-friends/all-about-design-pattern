import Duck from '../AbstractClass/Duck';
import FlyOnEngine from '../Interface/Fly/FlyOnEngine';
import IntroFakeDuck from '../Interface/Introduce/IntroFakeDuck';

export default class RocketDuck extends Duck {
  kind = 'Rocket Duck';

  constructor() {
    super();
    this.flyBehavior = new FlyOnEngine();
    this.introBehavior = new IntroFakeDuck();
  }
}
