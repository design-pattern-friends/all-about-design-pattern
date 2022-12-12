import { Beverage } from "./index";

abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;
  public abstract getDescription(): string;
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, 모카`;
  }

  public cost(): number {
    return this.beverage.cost() + 500;
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, 두유`;
  }

  public cost(): number {
    return this.beverage.cost() + 700;
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, 휘핑크림`;
  }

  public cost(): number {
    return this.beverage.cost() + 700;
  }
}

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, 우유`;
  }

  public cost(): number {
    return this.beverage.cost() + 500;
  }
}
