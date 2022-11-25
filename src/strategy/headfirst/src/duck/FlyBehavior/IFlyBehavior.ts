export interface IFlyBehavior {
  fly(): void;
}

export class DuckFlay implements IFlyBehavior {
  fly(): void {
    console.log('오리가 날아갑니다.');
  }
}

export interface IInputView {
  readBridgeSize(callback: (size: number) => void): void;
  readGameCommand(callback: (command: string) => void): void;
}
