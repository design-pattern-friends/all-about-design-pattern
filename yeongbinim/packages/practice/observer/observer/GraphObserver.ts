import NumberGenerator from "../numbergenerator/NumberGenerator";
import Observer from "./Observer";

export default class GraphObserver implements Observer {
	public update(generator: NumberGenerator): void{
			console.log("GraphObserver:\n");
			const count = generator.getNumber();

			console.log(`${Array.from({length: count}, () => "*").join("")}\n`);
	}
}