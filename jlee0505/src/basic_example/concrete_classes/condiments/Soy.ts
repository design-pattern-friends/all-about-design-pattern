import { Beverage } from "../../abstract_classes/Beverage";
import { CondimentDecorator } from "../../abstract_classes/CondimentDecorator";

export class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", 두유"
    }

    cost(): number {
        return this.beverage.cost() + 0.15;
    }
}