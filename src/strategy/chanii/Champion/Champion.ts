import ISkillBehavior from './SkillBehavior/ISkillBehavior';
import IMoveBehavior from './MoveBehavior/ImoveBehavior';

export default abstract class Champion {
  name!: string;

  QskillBehavior!: ISkillBehavior;

  WskillBehavior!: ISkillBehavior;

  EskillBehavior!: ISkillBehavior;

  RskillBehavior!: ISkillBehavior;

  moveBehavior!: IMoveBehavior;

  Qskill() {
    console.log(this.name);
    this.QskillBehavior.useSkill();
    console.log('');
  }

  Wskill() {
    console.log(this.name);
    this.WskillBehavior.useSkill();
    console.log('');
  }

  Eskill() {
    console.log(this.name);
    this.EskillBehavior.useSkill();
    console.log('');
  }

  Rskill() {
    console.log(this.name);
    this.RskillBehavior.useSkill();
    console.log('');
  }

  skillUp(skill: 'Q' | 'W' | 'E' | 'R') {
    switch (skill) {
      case 'Q':
        return this.QskillBehavior.skillUp();
      case 'W':
        return this.WskillBehavior.skillUp();
      case 'E':
        return this.EskillBehavior.skillUp();
      case 'R':
        return this.RskillBehavior.skillUp();
      default:
        return 0;
    }
  }

  setMove(move: IMoveBehavior) {
    this.moveBehavior = move;
  }
}
