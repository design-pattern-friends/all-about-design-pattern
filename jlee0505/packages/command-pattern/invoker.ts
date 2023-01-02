import { Command } from "./interface/Command";

export default class Invoker {
    slot!: Command;
    
    setCommand(command:Command){
        this.slot = command;
    }

    buttonWasPressed(){
        this.slot.execute();
    }
}