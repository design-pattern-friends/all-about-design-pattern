import CheesePizza from './pizzas/CheesePizza';
import GreekPizza from './pizzas/GreekPizza';
import Pizza from './pizzas/Pizza';

class PizzaStore {
  orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'greek') {
      pizza = new GreekPizza();
    }

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
