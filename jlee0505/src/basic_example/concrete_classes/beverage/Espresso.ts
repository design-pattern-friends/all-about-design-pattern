import { Beverage } from "../../abstract_classes/Beverage";

export class Espresso extends Beverage {
    constructor(){
        super();
        this.description = "에스프레소"
    };

    cost(): number{
        return 1.99;
    }
}