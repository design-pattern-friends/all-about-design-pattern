import Command from './Command';
import Light from './Light';

class LightOffCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.off();
  }
}

export default LightOffCommand;
