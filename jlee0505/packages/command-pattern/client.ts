import Invoker from "./invoker";
import { Screen } from "./interface/Screen";
import {Server} from "./interface/Server";
import { StatusOnCommand } from "./commands/screen/StatusOffCommand";
import { NotiOnCommand } from "./commands/server/notiOffCommand";
import ConcreteScreen from "./receivers/Screen";

class User {
    static invoker: Invoker;
    static screen: ConcreteScreen;
    static screenOn: StatusOnCommand;

    static toggleStatus() {
        this.invoker = new Invoker();
        this.screen = new ConcreteScreen();
        this.screenOn = new StatusOnCommand(this.screen);
       
        this.invoker.setCommand(this.screenOn);
        this.invoker.buttonWasPressed();
    }
}

User.toggleStatus()