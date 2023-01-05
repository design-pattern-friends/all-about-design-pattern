import { ICommand } from "./Command";

export class GarageDoor {
  constructor() {
  }

  up(): void {
    console.log("Garage Door is Open");
  }

  down(): void {
    console.log("Garage Door is Closed");
  }

  stop(): void {
    console.log("Garage Door is Stopped");
  }

  lightOn(): void {
    console.log("Garage light is on");
  }

  lightOff(): void {
    console.log("Garage light is off");
  }

}


export class GarageDoorOpenCommand implements ICommand {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.up();
  }
  undo(): void {
    this.garageDoor.down();
  }
}

export class GarageDoorCloseCommand implements ICommand {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.down();
  }
  undo(): void {
    this.garageDoor.up();
  }
}

