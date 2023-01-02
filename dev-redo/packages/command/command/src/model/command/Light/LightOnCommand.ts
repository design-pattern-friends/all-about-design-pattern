import ICommand from '../../../interface/ICommand';
import Light from '.';

class LightOnCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}

export default LightOnCommand;
