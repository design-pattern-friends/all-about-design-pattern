import { ICommand } from "./Command";

export class Stereo {
  constructor(
    protected name: string
  ) { };


  on(): void {
    console.log('Stereo is on');
  }
  off(): void {
    console.log('Stereo is off');
  }


  setCD(): void {
    console.log('Stereo is set for CD input');
  }
  setDvd(): void {
    console.log('Stereo is set for DVD input');
  }

  setRadio(): void {
    console.log('Stereo is set for Radio');
  }

  setVolume(volume: number): void {
    console.log(`Stereo volume set to ${volume}`);
  }

}


export class StereoOffCommand implements ICommand {

  constructor(
    private stereo: Stereo) {
  }

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
  }
}

export class StereoOnWithCDCommand implements ICommand {

  constructor(
    private stereo: Stereo) {
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
  }

}






export class StereoOnWithDVDCommand implements ICommand {

  constructor(
    private stereo: Stereo) {
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setDvd();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.on();
  }
}



export class StereoOnWithRadioCommand implements ICommand {

  constructor(
    private stereo: Stereo) {
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setRadio();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.on();
  }
}

