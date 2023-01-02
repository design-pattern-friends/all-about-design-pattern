import { Command } from "../../interface/Command";
import { Screen } from "../../interface/Screen";

export class StatusOnCommand implements Command {
    screen:Screen; 

    constructor (screen:Screen) {
        this.screen = screen;
    }

    execute(): void {
        this.screen.on();
    }

    undo(): void {
        this.screen.off();
    }
}