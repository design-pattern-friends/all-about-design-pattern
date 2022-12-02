import ISkillBehavior from './ISkillBehavior';

export default class Eskill implements ISkillBehavior {
  skillname: string;

  level = 0;

  constructor(skillname: string) {
    this.skillname = skillname;
  }

  useSkill() {
    if (this.level === 0) {
      return console.log(`${this.skillname}-스킬을 아직 찍지않음`);
    }
    return console.log(`${this.skillname}(${this.level})`);
  }

  skillUp() {
    this.level += 1;
  }
}
