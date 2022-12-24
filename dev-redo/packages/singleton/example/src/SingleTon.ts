let instance: SingleTon | null = null;

class SingleTon {
  #name;
  #age;

  constructor() {
    if (instance) return instance;
    
    this.#name = "Singleton";
    this.#age = 25;
    instance = this;
  }
}


export { instance, SingleTon }