import IIntroduce from './IIntroduce';

export default class IntroRealDuck implements IIntroduce {
  introduce(kind: string) {
    console.log(`Hi, I'm ${kind} 🦆.`);
  }
}
