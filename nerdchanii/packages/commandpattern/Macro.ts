import { ICommand } from "./Command";

export class MacroCommand implements ICommand {
  commands: ICommand[];

  constructor(commands: ICommand[]) {
    this.commands = commands;
  }

  execute(): void {
    this.commands.forEach((command) => {
      command.execute();
    });
  }

  undo(): void {
    this.commands.reverse().forEach((command) => {
      command.undo();
    });
  }
}

