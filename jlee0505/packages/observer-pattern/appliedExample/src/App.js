import {Background} from "./Observer/Background.js"
import {Text} from "./Observer/Text.js"
import { Subject } from "./Subject/Subject.js";
import {$} from "./utils/dom.js"


export default class App {
   constructor(target) {
    this.$target = target;
    this.subject = new Subject();
   }

   play() {
    this.initRender();
    this.register();
    this.setEvent();
   }

   initRender() {
    const $app = $(this.$target);
    $app.innerHTML = "<h1>Observer Pattern</h1>\n<button id='toggle-button'>toggle-me</button>";
    }

   setEvent() {
    const $button = $("#toggle-button");
    $button.addEventListener("click", this.update.bind(this));
   }

   register() {
    this.subject.registerObserver(new Background(this.subject));
    this.subject.registerObserver(new Text(this.subject));
   }

   update() {
    this.subject.setState();
    this.subject.notifyObservers(this.subject);
   }
}
