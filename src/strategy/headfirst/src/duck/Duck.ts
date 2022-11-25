import { IQuackBehavior } from './QuackBehavior/IQuackBehavior';
import { IFlyBehavior } from './FlyBehavior/IFlyBehavior';

export abstract class Duck {
  quackBehavior!: IQuackBehavior;
  flyBehavior!: IFlyBehavior;

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public setFlyBehavior(fb: IFlyBehavior) {
    console.log('날개 바꾸는 중...');
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: IQuackBehavior) {
    this.quackBehavior = qb;
  }
}
