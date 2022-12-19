import { Pizza } from '../interface/Pizza';
import { PizzaStore } from '../interface/PizzaStore';
import { NYStyleCheesePizza } from '../Products/NYStyleCheesePizza';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === 'cheese') return new NYStyleCheesePizza();
  }
}
