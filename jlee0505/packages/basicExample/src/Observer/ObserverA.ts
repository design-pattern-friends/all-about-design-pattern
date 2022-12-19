import { IObserver } from "./IObserver";

export class ObserverA implements IObserver {
    #value = false;

    update(value: boolean): void {
        this.#value = value;
        this.display();
    }

    display() {
        console.log(`I've got this value: ${this.#value} `)
    }
}