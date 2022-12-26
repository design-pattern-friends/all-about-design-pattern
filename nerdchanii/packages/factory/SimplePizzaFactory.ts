import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from "./Pizza";

export class SimplePizzaFactory{
  public createPizza(type: string) : Pizza {
    let pizza: Pizza;   
    if (type === "cheese") {
      pizza = new CheesePizza();
    }
    else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    }
    else if (type === "clam") {
      pizza = new ClamPizza();
    }
    else if (type === "veggie") {
      pizza = new VeggiePizza();
    }else{
      throw new Error('잘못된 피자 종류');
    }
    return pizza;
  }
}