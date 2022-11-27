/* eslint-disable import/no-unresolved, import/extensions */
import Bridge from './Bridge';
import Mode from './strategy/Mode';

export default class BridgeGame {
  private bridge: Bridge;

  private mode: Mode;

  constructor(mode: Mode, size: number) {
    this.mode = mode;
    this.bridge = mode.createBridge(size);
  }

  public setMode(mode: Mode, size: number) {
    this.mode = mode;
    this.bridge = mode.createBridge(size);
  }

  public extendBridge(command: string) {
    this.bridge.addPosition(this.mode.createPosition(command));
  }

  public currentBridge(): Array<number> {
    return this.bridge.stringify();
  }
}
