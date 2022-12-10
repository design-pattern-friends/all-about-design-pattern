import { Beverage } from "../../abstract_classes/Beverage";

export class HouseBlend extends Beverage {
    constructor(){
        super();
        this.description = "하우스 블렌드"
    };

    cost(): number{
        return 0.89;
    }
}