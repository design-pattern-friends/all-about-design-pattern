import ICommand from '../../../interface/ICommand';
import Light from '.';

class LightOffCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.off();
  }
}

export default LightOffCommand;
