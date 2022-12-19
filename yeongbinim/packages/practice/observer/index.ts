import NumberGenerator from './numbergenerator/NumberGenerator';
import RandomNumberGenerator from './numbergenerator/RandomNumberGenerator';
import Observer from './observer/Observer';
import DigitObserver from './observer/DigitObserver';
import GraphObserver from './observer/GraphObserver';

const generator: NumberGenerator = new RandomNumberGenerator();
const observer1: Observer = new DigitObserver();
const observer2: Observer = new GraphObserver();

generator.addObserver(observer1);
generator.addObserver(observer2);
generator.execute();
