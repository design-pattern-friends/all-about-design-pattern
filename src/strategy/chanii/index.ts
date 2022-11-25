import { Z_NEED_DICT } from 'zlib';
import Champion from './Champion/Champion';
import Zedd from './Champion/Zedd/Zedd';
import Sylas from './Champion/Sylas/Sylas';

const zedd: Champion = new Zedd();
const sylas = new Sylas();

zedd.Eskill();
sylas.Qskill();
sylas.skillUp('Q');
zedd.skillUp('Q');
sylas.Qskill();
zedd.Qskill();
sylas.skillUp('R');
sylas.skillUp('R');
sylas.skillUp('R');
sylas.stilRskill(zedd.RskillBehavior);
sylas.Rskill();
zedd.Rskill();
zedd.skillUp('W');
zedd.Wskill();
zedd.skillUp('E');
zedd.skillUp('E');
zedd.Eskill();
