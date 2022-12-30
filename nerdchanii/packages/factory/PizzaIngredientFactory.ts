import { MozzarellaCheese, ReggianoCheese } from "./ingredient/Cheese";
import { FreshClams, FrozenClams } from "./ingredient/Clams";
import { ThickCrustDough, ThinCrustDough } from "./ingredient/Dough";
import { SlicedPepperoni } from "./ingredient/Pepperoni";
import { MarinaraSauce, PlumTomatoSauce } from "./ingredient/Sauce";
import { BlackOlives, Eggplant, Garlic, Mushroom, Onion, RedPepper, Spinach } from "./ingredient/Veggies";

export interface Dough {
  name: string;
}
export interface Sauce {
  name: string;
}
export interface Cheese {
  name: string;
}
export interface Veggies {
  name: string;
}
export interface Pepperoni {
  name: string;
}
export interface Clams {
  name: string;
}


export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}



export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
  createCheese(): Cheese {
    return new ReggianoCheese();
  }
  createVeggies(): Veggies[] {
    const veggies = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    return veggies;
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FreshClams();
  }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }
  createSauce() {
    return new PlumTomatoSauce();
  }
  createCheese(){
    return new MozzarellaCheese();
  }

  createVeggies() {
    const veggies = [new BlackOlives(), new Spinach(), new Eggplant()];
    return veggies;
  }
  createPepperoni() {
    return new SlicedPepperoni();
  }
  createClam() {
    return new FrozenClams();
  }

}
