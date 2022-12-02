import { IQuackBehavior } from './IQuackBehavior';

export class Squeak implements IQuackBehavior {
  quack(): void {
    console.log('삑');
  }
}
