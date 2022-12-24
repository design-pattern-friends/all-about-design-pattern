import { instance, SingleTon } from "./SingleTon";

const firstSingleTon = new SingleTon();
const secondSingleTon = new SingleTon();

console.log(firstSingleTon === secondSingleTon); // true
console.log(instance === firstSingleTon); // true
