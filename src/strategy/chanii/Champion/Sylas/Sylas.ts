import Champion from '../Champion';
import DefaultMove from '../MoveBehavior/DefaultMove';
import Eskill from '../SkillBehavior/Eskill';
import ISkillBehavior from '../SkillBehavior/ISkillBehavior';
import Qskill from '../SkillBehavior/Qskill';
import Rskill from '../SkillBehavior/Rskill';
import Wskill from '../SkillBehavior/Wskill';

export default class Sylas extends Champion {
  name = 'Sylas';

  constructor() {
    super();
    this.moveBehavior = new DefaultMove();
    this.QskillBehavior = new Qskill('사슬 후려치기');
    this.WskillBehavior = new Wskill('국왕시해자');
    this.EskillBehavior = new Eskill('도주/억압');
    this.RskillBehavior = new Rskill('강랄');
  }

  stilRskill(RskillBehavior: ISkillBehavior) {
    console.log(`${this.name}still${RskillBehavior.skillname}`);
    this.RskillBehavior.skillname = RskillBehavior.skillname;
  }
}
