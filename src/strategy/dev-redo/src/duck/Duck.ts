import { IQuackBehavior } from './QuackBehavior/IQuackBehavior';
import { IFlyBehavior } from './FlyBehavior/IFlyBehavior';

export abstract class Duck {
  quackBehavior: IQuackBehavior;
  flyBehavior: IFlyBehavior;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠');
  }

  public setFlyBehavior(fb: IFlyBehavior) {
    console.log('setFlyBehavior 실행 :>> 나는 방식 변경');
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: IQuackBehavior) {
    console.log('setQuackBehavior 실행 :>> 꽥꽥 행동 변경');
    this.quackBehavior = qb;
  }
}
