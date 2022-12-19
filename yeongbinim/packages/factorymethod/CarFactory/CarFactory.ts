import Car from '../Car/Car';

abstract class CarFactory {
  public abstract createCar(name: string): Car | null;

  private numbering(): void {
    console.log('numbering');
  }
  private washCar(): void {
    console.log('washCar');
  }
  public sellCar(name: string): void {
    this.numbering();
    this.createCar(name);
    this.washCar();
  }
}

export default CarFactory;
