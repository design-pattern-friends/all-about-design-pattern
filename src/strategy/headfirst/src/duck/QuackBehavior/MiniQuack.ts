import { IQuackBehavior } from "./IQuackBehavior";

export class MiniQuack implements IQuackBehavior {
  quack(): void {
    console.log('작은 소리로 꽥꽥');
  }
}
