import IIntroduce from './IIntroduce';

export default class IntroFakeDuck implements IIntroduce {
  introduce(kind: string) {
    console.log(`Hi, I'm ${kind} 🐤`);
  }
}
