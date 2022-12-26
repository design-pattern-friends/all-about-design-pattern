import { IObserver } from '../Observer/IObserver';
import { ISubject } from './ISubject';

export class SimpleSubject implements ISubject {
  #observers: Set<IObserver> = new Set();

  #value = 0;

  public registerObserver(observer: IObserver): void {
    console.log(
      `Observer 등록 :>> ${observer.constructor.name} 클래스의 인스턴스`,
    );
    this.#observers.add(observer);
  }

  public removeObserver(observer: IObserver): void {
    console.log(
      `Observer 해지 :>> ${observer.constructor.name} 클래스의 인스턴스`,
    );
    this.#observers.delete(observer);
  }

  public notifyObservers(): void {
    [...this.#observers].forEach((observer: IObserver) => {
      observer.update(this.#value);
    });
  }

  public setValue(value: number) {
    this.#value = value;
    this.notifyObservers();
  }
}
