
export class Observer {
    state;

    update(subject){
        this.state = subject.getState;
        this.display();
    }

    display(){
        console.log("test");
    }
}