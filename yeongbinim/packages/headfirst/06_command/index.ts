import Light from './Command/Light';
import LightOffCommand from './Command/LightOffCommand';
import LightOnCommand from './Command/LightOnCommand';
import RemoteControl from './RemoteControl';

const remoteControl: RemoteControl = new RemoteControl();

const livingRoomLight: Light = new Light('Living Room');
const kitchenLight: Light = new Light('Kitchen');
// const ceilingFan: CeilingFan = new CeilingFan('Living Room');
// const garageDoor: GarageDoor = new GarageDoor('Garage');
// const stereo: Stereo = new Stereo('Living Room');

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
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
