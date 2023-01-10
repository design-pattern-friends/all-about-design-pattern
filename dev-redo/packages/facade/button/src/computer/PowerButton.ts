import { Memory } from './Memory';
import { HardDrive } from './HardDrive';
import { CPU } from './Cpu';

class PowerButton {
  private computerIsRunning = false;

  constructor(
    private cpu: CPU = new CPU(),
    private memory: Memory = new Memory(),
    private hardDrive: HardDrive = new HardDrive(),
  ) {}

  private startComputer() {
    this.cpu.start();
    this.memory.start();
    this.hardDrive.start();
    console.log('COMPUTER: Started!');
  }

  private stopComputer() {
    this.cpu.stop();
    this.memory.stop();
    this.hardDrive.stop();
    console.log('COMPUTER: Stopped!');
  }

  public press(): void {
    if (this.computerIsRunning) {
      this.stopComputer();
    }

    if (!this.computerIsRunning) {
      this.startComputer();
    }

    this.computerIsRunning = !this.computerIsRunning;
  }
}

export { PowerButton };
