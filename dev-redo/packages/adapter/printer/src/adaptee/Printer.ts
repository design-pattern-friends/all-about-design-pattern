class Printer {
  #textArr = [] as string[];

  pushText(text: string) {
    this.#textArr.push(text);
  }

  print() {
    return this.#textArr.join(' ');
  }
}

export default Printer;
