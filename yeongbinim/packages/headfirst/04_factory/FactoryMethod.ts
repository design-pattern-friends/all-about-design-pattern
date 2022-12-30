import NYStyleCheesePizza from './pizzas/NYStyleCheesePizza';
import Pizza from './pizzas/Pizza';

abstract class PizzaStore {
  orderPizza(type: string): Pizza | null {
    const pizza: Pizza | null = this.createPizza(type);

    if (pizza !== null) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
    }
    return pizza;
  }
  abstract createPizza(type: string): Pizza | null;
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza();
    }
    return pizza;
  }
}

const pizzastore = new NYPizzaStore();

pizzastore.orderPizza('cheese');
