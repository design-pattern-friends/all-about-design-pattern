import { ICommand } from "./Command";

export class Light {

  constructor(
    private name: string) {
  }

  on(): void {
    console.log(`${this.name} Light is on`);
  }

  off(): void {
    console.log(`${this.name} Light is off`);
  }
}


export class LightOnCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }

}

export class LightOffCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

