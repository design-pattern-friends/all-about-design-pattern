// eslint-disable-next-line import/no-unresolved
import BridgeGame from './BridgeGame';
import Mode from './strategy/Mode';
import ModeEasy from './strategy/ModeEasy';
import ModeNormal from './strategy/ModeNormal';
import { printMap } from './utils';

let mode: Mode = new ModeEasy();
const bridgeGame: BridgeGame = new BridgeGame(new ModeEasy(), 10);

console.log('이지 모드를 선택합니다.');
console.log('길이 10의 다리를 랜덤으로 초기화합니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('U');
console.log('\nU가 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('D');
console.log('\nD가 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('D');
console.log('\nD가 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

console.log('\n---------------------------------\n');

mode = new ModeNormal();
bridgeGame.setMode(mode, 10);
console.log('\n노말 모드를 선택합니다.');
console.log('길이 10의 다리를 랜덤으로 초기화합니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('U');
console.log('\nU가 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('M');
console.log('\nM이 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());

bridgeGame.extendBridge('D');
console.log('\nD가 입력되었습니다.');
printMap(bridgeGame.currentBridge(), mode.getBridgeWidth());
