import Pizza from './Pizza';

class NYStyleCheesePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string>;

  constructor() {
    super();
    this.name = '뉴욕 스타일 소스와 치즈피자';
    this.dough = '씬 크러스트 도우';
    this.sauce = '뉴욕 스타일 소스';
    this.toppings = ['치즈', '뉴욕 고기', '뉴욕 야채'];
  }
}

export default NYStyleCheesePizza;
