export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];
  prepare() {
    console.log('준비중: ' + this.name);
    console.log('반죽 만드는 중...');
    console.log('소스 만드는 중...');
    console.log('토핑 만드는 중...');
    for (const topping of this.toppings) {
      console.log(' ' + topping);
    }
  }
  bake() {
    console.log('175도에서 25분간 굽기...');
  }
  cut() {
    console.log('피자 사선으로 자르기...');
  }
  box() {
    console.log('상자에 피자 담기');
  }
  // get getName() {
  //   return this.name;
  // }
}
