import { Observer } from "./Observer.js";

export class Text extends Observer {
    state; 

    display() {
        if(this.state === "white") {
            document.body.style.color = "black";
        } else document.body.style.color = "white";
    }
}