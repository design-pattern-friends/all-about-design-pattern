import HashTagPrinter from '../adaptee/HashTagPrinter';

class HashTagPrinterAdapter {
  #printer;

  constructor(hashTagPrinter: HashTagPrinter) {
    this.#printer = hashTagPrinter;
  }

  pushText(text: string) {
    this.#printer.pushText(text);
  }

  print() {
    return this.#printer.printWithHash();
  }
}

export default HashTagPrinterAdapter;
