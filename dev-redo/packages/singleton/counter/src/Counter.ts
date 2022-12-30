class Counter {
  #counter = 0;
  static instance: Counter;

  constructor() {
    if (Counter.instance) return Counter.instance;
    Counter.instance = this;
  }

  getValue() {
    return this.#counter;
  }


  increase() {
    this.#counter += 1;
  };

  decrease() {
    this.#counter -= 1;
  };
}

export default Counter
