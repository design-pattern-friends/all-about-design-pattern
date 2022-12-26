import Pizza from './Pizza';

class GreekPizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string>;

  constructor() {
    super();
    this.name = '그릭 피자';
    this.dough = '일반 도우';
    this.sauce = '일반 소스';
    this.toppings = ['햄', '새우', '파인애플'];
  }
}

export default GreekPizza;
