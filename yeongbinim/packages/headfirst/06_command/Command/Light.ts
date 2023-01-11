class Light {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  on(): void {
    console.log(`${this.name} 전구를 켭니다.`);
  }
  off(): void {
    console.log(`${this.name} 전구를 끕니다.`);
  }
}

export default Light;
