import Car from '../Car/Car';
import Santafe from '../Car/Santafe';
import Sonata from '../Car/Sonats';
import CarFactory from './CarFactory';

class HyundaiCarFactory extends CarFactory {
  public createCar(name: string): Car | null {
    let car: Car | null = null;

    if (name === 'sonata') car = new Sonata();
    else if (name === 'santafe') car = new Santafe();
    return car;
  }
}

export default HyundaiCarFactory;
