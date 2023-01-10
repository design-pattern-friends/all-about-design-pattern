class HashTagPrinter {
  #textArr = [] as string[];

  pushText(text: string) {
    this.#textArr.push(text);
  }

  printWithHash() {
    return this.#textArr.map((text) => `#${text}`).join(' ');
  }
}

export default HashTagPrinter;
