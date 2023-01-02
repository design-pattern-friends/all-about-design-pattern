export default class ChoclateBoiler {
  private empty = true;
  private boiled = false;
  static #uniqueInstance: ChoclateBoiler | null = null;

  private constructor() {
    this.empty = false;
    this.boiled = false;
  }



  static getInstance() {
    if (ChoclateBoiler.#uniqueInstance === null) {
      ChoclateBoiler.#uniqueInstance = new ChoclateBoiler();
    }
    return ChoclateBoiler.#uniqueInstance;
  }

  fill() {
    if (this.isEmpty()) {
      if (this.isEmpty()) {
        this.empty = false;
        this.boiled = false;
      }
    }
  }

  drain() {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }

  boil() {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  isEmpty() {
    return this.empty;
  }

  isBoiled() {
    return this.boiled;
  }
}