import Command from './Command/Command';
import NoCommand from './Command/NoCommand';

class RemoteControl {
  private SLOT_SIZE = 7;
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;

  constructor() {
    this.onCommands = Array.from(
      { length: this.SLOT_SIZE },
      () => new NoCommand(),
    );
    this.offCommands = Array.from(
      { length: this.SLOT_SIZE },
      () => new NoCommand(),
    );
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command,
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    const buffer = [];

    buffer.push('\n---------- 리모컨 ----------\n');
    for (let i = 0; i < this.SLOT_SIZE; i++) {
      buffer.push(
        `[slot ${i}]\t${this.onCommands[i].constructor.name}\t${this.offCommands[i].constructor.name}\n`,
      );
    }
    return buffer.join('');
  }
}

export default RemoteControl;
