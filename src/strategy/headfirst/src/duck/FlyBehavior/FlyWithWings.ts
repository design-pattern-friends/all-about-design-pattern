import { IFlyBehavior } from "./IFlyBehavior";

export class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log('날개로 난다! 푸드득!');
  }
}
