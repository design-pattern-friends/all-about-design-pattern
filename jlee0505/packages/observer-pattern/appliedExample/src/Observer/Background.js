import { Observer } from "./Observer.js";
import {$} from "../utils/dom.js"

export class Background extends Observer {
    state; 

    display() {
        if(this.state === "white") {
            document.body.style.backgroundColor = "white"
        } else document.body.style.backgroundColor = "black"
    }
}