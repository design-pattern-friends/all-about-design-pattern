import Counter from "./Counter";

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1 === counter2); // true

counter1.increase();
counter1.increase();

console.log(counter1.getValue()); // 2
console.log(counter2.getValue()); // 2
console.log(counter1.getValue() === counter2.getValue()); // true
