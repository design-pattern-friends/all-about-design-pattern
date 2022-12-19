import Car from './Car/Car';
import CarFactory from './CarFactory/CarFactory';
import HyundaiCarFactory from './CarFactory/HyundaiCarFactory';
import KiaCarFactory from './CarFactory/KiaCarFactory';

let factory: CarFactory = new HyundaiCarFactory();
const newHyundaiCar: Car | null = factory.createCar('sonata');

console.log(newHyundaiCar !== null ? newHyundaiCar.toString() : newHyundaiCar);

factory = new KiaCarFactory();
const newKiaCar: Car | null = factory.createCar('k3');

console.log(newKiaCar !== null ? newKiaCar.toString() : newKiaCar);
