import { Cheese, Clams, Dough, Pepperoni, PizzaIngredientFactory, Sauce, Veggies } from "./PizzaIngredientFactory";

export abstract class Pizza{
  name!: string;
  dough!: Dough;
  sauce!: Sauce;
  veggies!: Veggies[];
  cheese!: Cheese;
  pepperoni!: Pepperoni;
  clam!: Clams;



  abstract prepare(): void;

  bake(){
    console.log(`175C에 25분간 굽기`);
  };
  cut(){
    console.log('피자를 사선으로 자르기');
  };
  box(){
    console.log('피자를 상자에 담기');
  };


  setName(name: string){
    this.name = name;

  }


  getName() {
    return this.name;
  }
}


export class CheesePizza extends Pizza{
 
  constructor(
    public ingredientFactory: PizzaIngredientFactory){
    super();
    return this;
  }
  
  prepare(): void {
    console.log(`${this.name} 준비중`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export class ClamPizza extends Pizza{
 
  constructor(
    public ingredientFactory: PizzaIngredientFactory){
      super();
    }
  
  prepare(): void {
    console.log(`${this.name} 준비중`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}


export class PepperoniPizza extends Pizza{
  // ingredientFactory: PizzaIngredientFactory;
 
  constructor(
    protected ingredientFactory: PizzaIngredientFactory
    ){
      super();
    }
  
  prepare(): void {
    console.log(`${this.name} 준비중`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}



export class VeggiePizza extends Pizza{

  constructor(
    public ingredientFactory: PizzaIngredientFactory){
      super();
    }
  
    prepare(): void {
      console.log(`${this.name} 준비중`);
      this.dough = this.ingredientFactory.createDough();
      this.sauce = this.ingredientFactory.createSauce();
      this.cheese = this.ingredientFactory.createCheese();
      this.veggies = this.ingredientFactory.createVeggies();
    }
}

  