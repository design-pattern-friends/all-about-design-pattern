import Pizza from './Pizza';

class ChicagoStyleCheesePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string>;

  constructor() {
    super();
    this.name = '시카고 스타일 딥 디쉬 치즈피자';
    this.dough = '아주 두꺼운 크러스트 도우';
    this.sauce = '플럼토마토 소스';
    this.toppings = ['모짜렐라 치즈', '시카고 고기', '시카고 야채'];
  }
}

export default ChicagoStyleCheesePizza;
