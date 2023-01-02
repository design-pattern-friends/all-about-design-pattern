import ChoclateBoiler from "./ChocolateBoiler"


const boiler = ChoclateBoiler.getInstance();
const boiler2 = ChoclateBoiler.getInstance();

console.log('두 보일러! ', boiler === boiler2);








export { }
