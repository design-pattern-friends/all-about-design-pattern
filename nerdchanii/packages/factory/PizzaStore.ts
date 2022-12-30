import { Pizza } from "./Pizza";

export abstract class PizzaStore{
  protected abstract createPizza(type: string): Pizza|null;
  
  public orderPizza(type : string) : Pizza{
    let pizza = this.createPizza(type);
    if(!pizza) throw new Error('잘못된 피자 종류');
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
