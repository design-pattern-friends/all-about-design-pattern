import Duck from './AbstractClass/Duck';
import MallardDuck from './ConcreteClass/MallardDuck';
import RubberDuck from './ConcreteClass/RubberDuck';
import RocketDuck from './ConcreteClass/RocketDuck';
import RedheadDuck from './ConcreteClass/RedheadDuck';

const mallard: Duck = new MallardDuck();
const rubber: Duck = new RubberDuck();
const rocket: Duck = new RocketDuck();
const redhead: Duck = new RedheadDuck();

mallard.walk();
mallard.swim();
mallard.fly();

rubber.fly();

rocket.fly();

redhead.fly();
