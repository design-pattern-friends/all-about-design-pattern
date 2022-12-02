import Duck from '../AbstractClass/Duck';
import FlyNoWay from '../Interface/Fly/FlyNoWay';
import IntroFakeDuck from '../Interface/Introduce/IntroFakeDuck';

export default class RubberDuck extends Duck {
  kind = 'Rubber Duck';

  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.introBehavior = new IntroFakeDuck();
  }
}
