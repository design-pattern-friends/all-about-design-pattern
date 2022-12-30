
class SingleTon {
  static instance: SingleTon;
  #name;
  #age;

  constructor() {
    if (SingleTon.instance) return SingleTon.instance;
    
    this.#name = "Singleton";
    this.#age = 25;
    SingleTon.instance = this;
  }
}


export { SingleTon }