import { Pizza } from "./Pizza";
import { NYStore } from "./NYStore";
import { ChicagoStore} from "./ChicagoStore";

export class PizzaTestDrive{
  public static main(){
    const nyStore = new NYStore();
    const chicagoStore = new ChicagoStore();
    let pizza : Pizza = nyStore.orderPizza('cheese');
    
    console.log(`에단이 주문한 : ${pizza.getName()} \n`);
    // pizza = nyStore.orderPizza("veggie");
    // console.log(`주문한 피자: ${pizza.getName()}`);
    console.log('-------------------------\n\n\n\n');

    pizza = chicagoStore.orderPizza('cheese');
    console.log(`조엘이 주문한 : ${pizza.getName()} \n`);
    // pizza = chicagoStore.orderPizza("veggie");
    // console.log(`주문한 피자: ${pizza.getName()}`);


  }
}


PizzaTestDrive.main();