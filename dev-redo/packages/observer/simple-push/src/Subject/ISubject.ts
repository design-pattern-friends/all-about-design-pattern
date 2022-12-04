import { IObserver } from '../Observer/IObserver';

export interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}
