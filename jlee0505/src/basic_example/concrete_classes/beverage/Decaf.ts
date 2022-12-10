import { Beverage } from "../../abstract_classes/Beverage";

export class Decaf extends Beverage {
    constructor(){
        super();
        this.description = "디카페인"
    };

    cost(): number{
        return 1.09;
    }
}