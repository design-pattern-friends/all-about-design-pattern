import CarFactory from './CarFactory/CarFactory';
import HyundaiCarFactory from './CarFactory/HyundaiCarFactory';
import KiaCarFactory from './CarFactory/KiaCarFactory';

let factory: CarFactory = new HyundaiCarFactory();

factory.sellCar('sonata');

factory = new KiaCarFactory();
factory.sellCar('k3');
