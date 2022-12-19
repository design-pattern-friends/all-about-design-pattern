import Car from '../Car/Car';

abstract class CarFactory {
  public abstract createCar(name: string): Car | null;

  private numbering(): void {
    console.log('numbering');
  }
  private washCar(): void {
    console.log('washCar');
  }
  public sellCar(name: string): Car | null {
    this.numbering();
    const car: Car | null = this.createCar(name);

    this.washCar();
    return car;
  }
}

export default CarFactory;
