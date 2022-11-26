import Duck from '../AbstractClass/Duck';
import FlyNoWay from '../Interface/Fly/FlyNoWay';
import IntroFakeDuck from '../Interface/Introduce/IntroFakeDuck';

export default class RubberDuck extends Duck {
  kind = 'Rubber Duck';

  flyBehavior = new FlyNoWay();

  introduceBehavior = new IntroFakeDuck();

  fly() {
    this.flyBehavior.fly();
  }

  introduce() {
    this.introduceBehavior.introduce(this.kind);
  }
}
