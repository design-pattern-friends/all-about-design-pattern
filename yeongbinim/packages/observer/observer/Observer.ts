import NumberGenerator from "../numbergenerator/NumberGenerator";

export default interface Observer {
	update(generator: NumberGenerator): void;
}