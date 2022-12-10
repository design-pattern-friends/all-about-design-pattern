import { Beverage } from "../../abstract_classes/Beverage";

export class DarkRoast extends Beverage {
    constructor(){
        super();
        this.description = "다크 로스트"
    };

    cost(): number{
        return 0.99;
    }
}