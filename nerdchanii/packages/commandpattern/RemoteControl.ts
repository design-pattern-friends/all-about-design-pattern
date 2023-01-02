import { ICommand } from "./Command";


export class RemoteControl {
  oncommands: ICommand[];
  offcommands: ICommand[];
  undoCommnad!: ICommand[];

  constructor() {
    this.oncommands = [];
    this.offcommands = [];
    this.initCommands();
  }


  initCommands(): void {
    let noCommand = new class NoCommand implements ICommand {
      constructor() { }
      execute(): void {
        console.log("No command");
      }
      undo(): void {
        console.log("No command");
      }
    }

    for (let i = 0; i < 7; i++) {
      this.oncommands[i] = noCommand;
      this.offcommands[i] = noCommand;
    }
    this.undoCommnad = [noCommand];
  }

  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
    this.oncommands[slot] = onCommand;
    this.offcommands[slot] = offCommand;
  }

  onButtonWasPressed(slot: number): void {
    this.oncommands[slot].execute();
    this.undoCommnad.push(this.oncommands[slot])
  }

  offButtonWasPressed(slot: number): void {
    this.offcommands[slot].execute();
    this.undoCommnad.push(this.offcommands[slot]);
  }

  undoButtonWasPressed(): void {
    console.log('--undo--');
    if (this.undoCommnad.length > 1) {
      let undoCommnad: ICommand = this.undoCommnad.pop()!;
      undoCommnad.undo();
    }
  }

  toString(): string {
    let string = '\n====== Remote Control ======\n';
    for (let i = 0; i < this.oncommands.length; i++) {
      string += `[slot ${i}] ${this.oncommands[i].constructor.name} ${this.offcommands[i].constructor.name} \n`;
    }

    return string;
  }

}