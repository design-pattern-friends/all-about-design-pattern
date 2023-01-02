import { Light, LightOffCommand, LightOnCommand } from "./Light";
import { GarageDoor, GarageDoorCloseCommand, GarageDoorOpenCommand } from "./GarageDoor";
import { RemoteControl } from "./RemoteControl";
import { Stereo, StereoOffCommand, StereoOnWithCDCommand } from "./Stereo";
import { CeilingFan, CeilingFanHighCommand, CeilingFanLowCommand, CeilingFanMediumCommand, CeilingFanOffCommand } from "./CeilingFan";
import { TV, TVChannelDownCommand, TVOffCommand, TVOnCommand, TVVolumeDownCommand, TVVolumeUpCommand, TVChannelUpCommand } from "./TV";
import { MacroCommand } from "./Macro";

export class RemoteControlTest {
  remote: RemoteControl;

  livingRoomLight = new Light("Living Room");
  kitchenLight = new Light("Kitchen");
  garageDoor = new GarageDoor();
  stereo = new Stereo("Living Room");
  ceilingFan = new CeilingFan("Living Room");

  livingRoomLightOn = new LightOnCommand(this.livingRoomLight);
  livingRoomLightOff = new LightOffCommand(this.livingRoomLight);

  kitchenLightOn = new LightOnCommand(this.kitchenLight);
  kitchenLightOff = new LightOffCommand(this.kitchenLight);

  garageDoorUp = new GarageDoorOpenCommand(this.garageDoor);
  garageDoorDown = new GarageDoorCloseCommand(this.garageDoor);

  stereoOnWithCD = new StereoOnWithCDCommand(this.stereo);
  stereoOff = new StereoOffCommand(this.stereo);

  // Ceiling Fan
  ceilFanHigh = new CeilingFanHighCommand(this.ceilingFan);
  ceilFanMedium = new CeilingFanMediumCommand(this.ceilingFan);
  ceilFanLow = new CeilingFanLowCommand(this.ceilingFan);
  ceilFanOff = new CeilingFanOffCommand(this.ceilingFan);

  // TV
  tv = new TV('Living Room');
  tvOn = new TVOnCommand(this.tv);
  tvOff = new TVOffCommand(this.tv);
  tvChannelUp = new TVChannelUpCommand(this.tv);
  tvChannelDown = new TVChannelDownCommand(this.tv);

  partyOnMacro = new MacroCommand([this.livingRoomLightOn, this.stereoOnWithCD, this.ceilFanHigh, this.tvOn]);
  partyOffMacro = new MacroCommand([this.livingRoomLightOff, this.stereoOff, this.ceilFanOff, this.tvOff]);




  constructor() {
    this.remote = new RemoteControl();

    this.remote.setCommand(0, this.livingRoomLightOn, this.livingRoomLightOff);
    this.remote.setCommand(1, this.kitchenLightOn, this.kitchenLightOff);
    this.remote.setCommand(2, this.garageDoorUp, this.garageDoorDown);
    this.remote.setCommand(3, this.stereoOnWithCD, this.stereoOff);
    this.remote.setCommand(4, this.ceilFanHigh, this.ceilFanOff);
    this.remote.setCommand(5, this.ceilFanMedium, this.ceilFanOff);
    this.remote.setCommand(6, this.ceilFanLow, this.ceilFanOff);
    this.remote.setCommand(7, this.partyOnMacro, this.partyOffMacro);
    console.log(this.remote.toString());

    console.log('--- Pushing Macro On ---');
    this.remote.onButtonWasPressed(7);
    console.log('--- Pushing Macro Off ---');
    this.remote.offButtonWasPressed(7);



    this.remote.undoButtonWasPressed();
    this.remote.undoButtonWasPressed();
    this.remote.undoButtonWasPressed();


  }
}

new RemoteControlTest();
