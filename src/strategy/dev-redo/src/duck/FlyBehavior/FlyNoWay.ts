import { IFlyBehavior } from './IFlyBehavior';

export class FlyNoWay implements IFlyBehavior {
  fly() {
    console.log('저는 못 날아요');
  }
}
