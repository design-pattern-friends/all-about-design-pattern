import { MallardDuck } from './duck/MallardDuck';
import { ModelDuck } from './duck/ModelDuck';
import { MiniDuckSimulator } from './duck/MiniDuckSimulator';

console.log('============= 물오리 =============');
const mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

console.log('============= 모델 오리 =============');
const modelDuck = new ModelDuck();
modelDuck.display();
modelDuck.performFly();
modelDuck.performQuack();

console.log('============= 오리 시뮬레이터 =============');
const duckSimulator = new MiniDuckSimulator();
duckSimulator.setSimulatorToModel();
