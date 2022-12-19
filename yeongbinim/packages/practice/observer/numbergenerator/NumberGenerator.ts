import Observer from "../observer/Observer";

export default abstract class NumberGenerator {
	private observers: Array<Observer> = [];// Observer들을 보관
	
	public addObserver(observer: Observer): void { // Observer를 추가
			this.observers.push(observer);
	}
	public deleteObserver(observer: Observer): void { // Observer를 삭제
		const idx = this.observers.indexOf(observer);

		if (idx > -1)
			this.observers.splice(idx, 1);
	}
	public notifyObservers(): void { // Observer에 통지
		this.observers.forEach((observer) => observer.update(this));
	}
	public abstract getNumber(): number; // 수를 취득한다.
	public abstract execute(): void; // 수를 생성한다.
}