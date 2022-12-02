import Duck from '../AbstractClass/Duck';
import FlyWithWings from '../Interface/Fly/FlyWithWings';
import IntroRealDuck from '../Interface/Introduce/IntroRealDuck';

export default class RedheadDuck extends Duck {
  kind = 'Redhead Duck';

  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.introBehavior = new IntroRealDuck();
  }
}
