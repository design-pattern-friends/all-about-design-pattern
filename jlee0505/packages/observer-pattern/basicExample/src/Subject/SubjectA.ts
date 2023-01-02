import { IObserver } from "../Observer/IObserver";
import { ISubject } from "./ISubject";


export class SubjectA implements ISubject {
    #observers: Set<IObserver> = new Set();
    #value = false;

    registerObserver(observer:IObserver){
        console.log(`옵저버 등록: >> ${observer.constructor.name} 클래스의 인스턴스`)
        this.#observers.add(observer);
    };
    removeObserver(observer:IObserver){
        console.log(`옵저버 구독 취소: >> ${observer.constructor.name} 클래스의 인스턴스`)
        this.#observers.delete(observer)
    };
    notifyObservers(){
        [...this.#observers].forEach((observer)=>{
            observer.update(this.#value)
        })
    }
    setValue(value: boolean){
        this.#value = value;
        this.notifyObservers();
    }
}