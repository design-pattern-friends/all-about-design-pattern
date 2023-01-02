import { Command } from "../../interface/Command";
import { Notification } from "../../interface/Server";

export class NotiOnCommand implements Command {
    notification:Notification; 

    constructor (notification:Notification) {
        this.notification = notification;
    }

    execute(): void {
        this.notification.on();
    }

    undo(): void {
        this.notification.off();
    }
}