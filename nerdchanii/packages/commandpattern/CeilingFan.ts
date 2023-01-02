import { ICommand } from "./Command";

export class CeilingFan {
  public static HIGH = 3;
  public static MEDIUM = 2;
  public static LOW = 1;
  public static OFF = 0;
  public location: string;
  public speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} ceiling fan is off`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}

export class CeilingFanHighCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed!: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
    }
  }
}


export class CeilingFanMediumCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed!: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
    }
  }
}

export class CeilingFanLowCommand implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed!: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.low();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
    }
  }
}


export class CeilingFanOffCommand implements ICommand {
  prevSpeed!: number;
  ceilingFan: CeilingFan;

  constructor(ceilinFan: CeilingFan) {
    this.ceilingFan = ceilinFan;
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
    }
  }
}
