export default abstract class Duck {
  kind!: string;

  walk() {
    console.log('i can walk.');
  }

  swim() {
    console.log('i can swim as well.');
  }

  fly() {
    console.log('Some kind can fly and others cannot.');
  }
}
