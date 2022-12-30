import { IMenu } from "../interface/IMenu";

export abstract class Beverage implements IMenu {
  description!: string;
  milk!: boolean;
  soy!: boolean;
  mocha!: boolean;
  whip!: boolean;
  abstract cost(): number;
  getDescription(): string {
    return this.description;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 3000;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  cost(): number {
    return 4000;
  }
}

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decafe Coffee";
  }

  cost(): number {
    return 4000;
  }
}

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 3500;
  }
}
