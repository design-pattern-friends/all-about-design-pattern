/* eslint-disable import/no-unresolved, import/extensions */
import Bridge from '../Bridge';
import Position from '../Position';

/** @interface */
export default interface Mode {
  createPosition(positionSign: string): Position;
  createBridge(size: number): Bridge;
  getBridgeWidth(): number;
}
