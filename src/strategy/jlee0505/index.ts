import Duck from './AbstractClass/Duck';
import MallardDuck from './ConcreteClass/MallardDuck';
import RubberDuck from './ConcreteClass/RubberDuck';
import RocketDuck from './ConcreteClass/RocketDuck';
import RedheadDuck from './ConcreteClass/RedheadDuck';
import FlyOnEngine from './Interface/Fly/FlyOnEngine';

const mallard: Duck = new MallardDuck();
const rubber: Duck = new RubberDuck();
const rocket: Duck = new RocketDuck();
const redhead: Duck = new RedheadDuck();

mallard.introduce();
mallard.fly();

rubber.introduce();
rubber.fly();
rubber.setFlyBehavior(new FlyOnEngine());
rubber.fly();

rocket.introduce();
rocket.fly();

redhead.introduce();
redhead.fly();
