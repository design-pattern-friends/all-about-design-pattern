import { Beverage, DarkRoast, Espresso } from "./Beverage";
import { Mocha, Whip } from "./Beverage/CondimentDecorator";
import OrderSheet from "./OrderSheet";
import { HolidayCoupon, BirthdayCoupon } from "./Coupon";


const orderSheet = new OrderSheet([], []);

const beverage: Beverage = new Espresso();

// console.log("---------------------");
// console.log(beverage.getDescription());
// console.log(beverage.cost());
// console.log("---------------------");

let beverage2: Beverage = new DarkRoast();

beverage2 = new Whip(new Mocha(new Mocha(beverage2)));

orderSheet.addItem(beverage2);
orderSheet.addItem(beverage);

console.log("before discount----------------");
console.log(orderSheet.getMenu());
console.log(orderSheet.cost());
console.log("---------------------");

orderSheet.appplyCoupon(new HolidayCoupon());
orderSheet.appplyCoupon(new BirthdayCoupon());

console.log("after discount----------------");
console.log(orderSheet.getMenu());
console.log(orderSheet.cost());
console.log("---------------------");
