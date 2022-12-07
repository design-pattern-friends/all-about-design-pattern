import { IObserver } from './IObserver';
import { ISubject } from '../Subject/ISubject';

export class SimpleObserver implements IObserver {
  #value = 0;

  public simpleObserver(simpleSubject: ISubject) {
    simpleSubject.registerObserver(this);
  }

  public update(value: number) {
    this.#value = value;
    this.display();
  }

  public display() {
    console.log(`Value : ${this.#value}`);
  }
}
