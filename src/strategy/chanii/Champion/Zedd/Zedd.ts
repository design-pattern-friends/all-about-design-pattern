import Champion from '../Champion';
import DefaultMove from '../MoveBehavior/DefaultMove';
import Qskill from '../SkillBehavior/Qskill';
import Wskill from '../SkillBehavior/Wskill';
import Eskill from '../SkillBehavior/Eskill';
import Rskill from '../SkillBehavior/Rskill';

export default class Zedd extends Champion {
  name = 'Zedd';

  constructor() {
    super();
    this.moveBehavior = new DefaultMove();
    this.QskillBehavior = new Qskill('예리한 표창');
    this.WskillBehavior = new Wskill('살아있는 그림자');
    this.EskillBehavior = new Eskill('그림자 베기');
    this.RskillBehavior = new Rskill('죽음의 표식');
  }
}
