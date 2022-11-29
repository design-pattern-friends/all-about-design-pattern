import IFlyBehavior from '../Interface/Fly/IFlyBehavior';
import IIntroduce from '../Interface/Introduce/IIntroduce';

export default abstract class Duck {
  kind!: string;

  flyBehavior!: IFlyBehavior;

  introBehavior!: IIntroduce;

  walk() {
    console.log('i can walk.');
  }

  swim() {
    console.log('i can swim as well.');
  }

  fly() {
    this.flyBehavior.fly();
    console.log(' ');
  }

  introduce() {
    this.introBehavior.introduce(this.kind);
    console.log(' ');
  }
}
