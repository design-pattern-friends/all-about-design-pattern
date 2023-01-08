import { PowerButton } from './computer/PowerButton';

const powerButton = new PowerButton();
clientCode(powerButton);

function clientCode(powerButton: PowerButton) {
  powerButton.press();
  powerButton.press();
}
