import ICommand from '../interface/ICommand';
import NoCommand from '../interface/NoCommand';

class RemoteControl {
  private SLOT_SIZE = 2;
  private onCommands: Array<ICommand>;
  private offCommands: Array<ICommand>;

  constructor() {
    this.onCommands = [...Array(this.SLOT_SIZE)].fill(new NoCommand());
    this.offCommands = [...Array(this.SLOT_SIZE)].fill(new NoCommand());
  }

  public setCommand(
    slot: number,
    onCommand: ICommand,
    offCommand: ICommand,
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
    return [...Array(this.SLOT_SIZE)]
      .map((_, idx) => idx)
      .reduce(
        (commandList, idx) =>
          (commandList += `[slot ${idx}]\t${this.onCommands[idx].constructor.name}\t${this.offCommands[idx].constructor.name}\n`),
        '',
      );
  }
}

export default RemoteControl;
