import { Duck } from './duck/Duck';
import { MallardDuck } from './duck/MallardDuck';
import { FlyNoWay } from './duck/FlyBehavior/FlyNoWay';

const mallard: Duck = new MallardDuck();

mallard.performQuack();
mallard.performFly();

console.log('날개가 없어졌습니다.');
mallard.setFlyBehavior(new FlyNoWay());
mallard.performFly();
