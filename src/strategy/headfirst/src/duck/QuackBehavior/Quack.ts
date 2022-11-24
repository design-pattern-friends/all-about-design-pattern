import { IQuackBehavior } from './IQuackBehavior';

export class Quack implements IQuackBehavior {
  quack(): void {
    console.log('꽥꽥');
  }
}
