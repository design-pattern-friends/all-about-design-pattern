import Car from '../Car/Car';
import K3 from '../Car/K3';
import K5 from '../Car/K5';
import K7 from '../Car/K7';
import CarFactory from './CarFactory';

class KiaCarFactory extends CarFactory {
  public createCar(name: string): Car | null {
    let car: Car | null = null;

    if (name === 'k3') car = new K3();
    else if (name === 'k5') car = new K5();
    else if (name === 'k7') car = new K7();
    return car;
  }
}

export default KiaCarFactory;
