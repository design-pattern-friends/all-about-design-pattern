abstract class Car {
  public abstract carType: string;
  public toString(): string {
    return this.carType;
  }
}

export default Car;
