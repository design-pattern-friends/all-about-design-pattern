import Light from './model/command/Light';
import LightOnCommand from './model/command/Light/LightOnCommand';
import LightOffCommand from './model/command/Light/LightOffCommand';
import RemoteControl from './controller/RemoteControl';

const remoteControl: RemoteControl = new RemoteControl();

const livingRoomLight: Light = new Light('Living Room');
const kitchenLight: Light = new Light('Kitchen');

const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
const livingRoomLightOff: LightOffCommand = new LightOffCommand(
  livingRoomLight,
);
const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);

console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);

console.log('=======================================');

remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
