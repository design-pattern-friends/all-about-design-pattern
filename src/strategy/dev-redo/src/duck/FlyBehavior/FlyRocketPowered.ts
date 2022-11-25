import { IFlyBehavior } from './IFlyBehavior';

export class FlyRocketPowered implements IFlyBehavior {
  fly(): void {
    console.log('로켓 추진으로 날아갑니다');
  }
}
