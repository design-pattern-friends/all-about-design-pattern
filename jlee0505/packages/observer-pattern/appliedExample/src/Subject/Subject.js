
export class Subject {
    #observers = new Set();
    #state = "white";

    registerObserver(observer){
        console.log(`옵저버 등록: >> ${observer.constructor.name} 클래스의 인스턴스`)
        this.#observers.add(observer);
    };
    removeObserver(observer){
        console.log(`옵저버 구독 취소: >> ${observer.constructor.name} 클래스의 인스턴스`)
        this.#observers.delete(observer);
    };
    notifyObservers(state){
        [...this.#observers].forEach((observer)=>{
            observer.update(state);
        });
    }
    get getState(){
        return this.#state;
    }

    setState(){
        this.#state = (this.#state === "white") ? "dark": "white"; 
    }
}