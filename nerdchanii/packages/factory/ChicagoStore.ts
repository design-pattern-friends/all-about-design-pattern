import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from "./Pizza";
import { ChicagoPizzaIngredientFactory } from "./PizzaIngredientFactory";
import { PizzaStore } from "./PizzaStore";


export class ChicagoStore extends PizzaStore{
  protected createPizza(item: string): Pizza {
    let pizza : Pizza;
    let ingredientFactory = new ChicagoPizzaIngredientFactory();
    switch(item){
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName("시카고 치즈 피자");
        return pizza;
      case "veggie":
        pizza = new VeggiePizza(ingredientFactory);
        pizza.setName("시카고 채소 피자");
        return pizza;
      case "clam":
        pizza =  new ClamPizza(ingredientFactory);
        pizza.setName("시카고 조개 피자");
        return pizza;
      case "pepperoni":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.setName("시카고 페퍼로니 피자");
      default:
        throw new Error('잘못된 피자 종류');
    }
  }
}