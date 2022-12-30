import NumberGenerator from "./NumberGenerator";

export default class RandomNumberGenerator extends NumberGenerator {
	private number = 0;  // 현재의 수
	private static nextInt(max: number): number {
		return Math.floor(Math.random() * max);
	}
	public getNumber(): number {// 수를 취득한다.
		return this.number;
	}
	public execute(): void {
		for (let i = 0; i < 20; i++) {
			this.number = RandomNumberGenerator.nextInt(50);
			this.notifyObservers();
		}
	}
}