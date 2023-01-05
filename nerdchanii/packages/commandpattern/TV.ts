import { ICommand } from "./Command";

export class TV {
  channel: number;
  volume: number;

  constructor(
    public name: string) {
    this.channel = 7;
    this.volume = 11;
  }


  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`${this.name} set volume to ${volume}`);
  }

  setChannel(channel: number): void {
    this.channel = channel;
    console.log(`${this.name} set channel to ${channel}`);
  }

  on(): void {
    console.log(`TV ${this.name} is on`);
  }

  off(): void {
    console.log(`TV ${this.name} is off`);
  }

  getChannel(): number {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }
}


export class TVOnCommand implements ICommand {
  tv: TV;
  prevVolume!: number;
  prevChannel!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.on();
    this.prevVolume = this.tv.getVolume();
    this.prevChannel = this.tv.getChannel();
  }

  undo(): void {
    this.tv.off();
  }
}

export class TVOffCommand implements ICommand {
  tv: TV;
  prevVolume!: number;
  prevChannel!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.off();
  }

  undo(): void {
    this.tv.on();
    this.tv.setVolume(this.prevVolume);
    this.tv.setChannel(this.prevChannel);
  }
}


export class TVVolumeUpCommand implements ICommand {
  tv: TV;
  prevVolume!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.prevVolume = this.tv.getVolume();
    this.tv.setVolume(this.prevVolume + 1);
  }

  undo(): void {
    this.tv.setVolume(this.prevVolume);
  }
}


export class TVVolumeDownCommand implements ICommand {
  tv: TV;
  prevVolume!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.prevVolume = this.tv.getVolume();
    this.tv.setVolume(this.prevVolume - 1);
  }
  undo(): void {
    this.tv.setVolume(this.prevVolume);
  }
}


export class TVChannelUpCommand implements ICommand {
  tv: TV;
  prevChannel!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.prevChannel = this.tv.getChannel();
    this.tv.setChannel(this.prevChannel + 1);
  }

  undo(): void {
    this.tv.setChannel(this.prevChannel);
  }
}

export class TVChannelDownCommand implements ICommand {
  tv: TV;
  prevChannel!: number;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.prevChannel = this.tv.getChannel();
    this.tv.setChannel(this.prevChannel - 1);
  }

  undo(): void {
    this.tv.setChannel(this.prevChannel);
  }
}



