import CheesePizza from './pizzas/CheesePizza';
import GreekPizza from './pizzas/GreekPizza';
import Pizza from './pizzas/Pizza';

class SimplePizzaFactory {
  public createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'greek') {
      pizza = new GreekPizza();
    }
    return pizza;
  }
}

class PizzaStore {
  private pizzaFactory: SimplePizzaFactory;
  constructor() {
    this.pizzaFactory = new SimplePizzaFactory();
  }

  orderPizza(type: string): Pizza | null {
    const pizza: Pizza | null = this.pizzaFactory.createPizza(type);

    if (pizza !== null) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
    }
    return pizza;
  }
}

const pizzastore = new PizzaStore();

pizzastore.orderPizza('cheese');
