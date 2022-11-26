import IFlyBehavior from './IFlyBehavior';

export default class FlyOnEngine implements IFlyBehavior {
  fly() {
    console.log('I can fly on engine.');
  }
}
