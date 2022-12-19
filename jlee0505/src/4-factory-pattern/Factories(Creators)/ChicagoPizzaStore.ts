import { Pizza } from '../interface/Pizza';
import { PizzaStore } from '../interface/PizzaStore';
import { ChicagoStyleCheesePizza } from '../Products/ChicagoStyleCheesePizza';

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === 'cheese') return new ChicagoStyleCheesePizza();
  }
}
