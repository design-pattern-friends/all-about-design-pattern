import { Pizza } from './Pizza';

export abstract class PizzaStore {
  pizza: Pizza;

  protected abstract createPizza(type: string): Pizza;

  orderPizza(type: string) {
    this.pizza = this.createPizza(type);
    this.pizza.prepare();
    this.pizza.bake();
    this.pizza.cut();
    this.pizza.box();
  }
}
