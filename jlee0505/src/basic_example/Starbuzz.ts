import { Beverage } from "./abstract_classes/Beverage.js";
import {CondimentDecorator} from "./abstract_classes/CondimentDecorator.js"
import { DarkRoast } from "./concrete_classes/beverage/DarkRoast.js";
import { Decaf } from "./concrete_classes/beverage/Decaf.js";
import { Espresso } from "./concrete_classes/beverage/Espresso.js";
import { HouseBlend } from "./concrete_classes/beverage/HouseBlend.js";
import { Milk } from "./concrete_classes/condiments/Milk.js";
import { Mocha } from "./concrete_classes/condiments/Mocha.js";
import { Soy } from "./concrete_classes/condiments/Soy.js";
import { Whip } from "./concrete_classes/condiments/Whip.js";
import {BEVERAGE, CONDIMENTS} from "./constants/constants.js"

type Condiments = {
    condiments: {
        [index:string] : number,
    }
}
type Orders = Condiments & {beverage:string};

class Starbuzz {
    beverage: Beverage;
    decoratedBeverage: CondimentDecorator | undefined;
    cost:number;

    constructor(orders:Orders){
        this.parseOrder(orders);
        this.printReceipt(orders.condiments);
    }

    parseOrder(orders:Orders){
        this.setBeverage(orders.beverage);
        if(orders.condiments){
            this.calcCondiments(orders.condiments);
            this.setCondiments(orders.condiments);
        }
    }

    setBeverage(beverage:string){
        switch(beverage){
            case BEVERAGE.HOUSE_BLEND: this.beverage = new HouseBlend(); break;
            case BEVERAGE.DARK_ROAST: this.beverage = new DarkRoast(); break;
            case BEVERAGE.DECAF: this.beverage = new Decaf();break;
            case BEVERAGE.ESPRESSO: this.beverage = new Espresso();break;
        }
    }

    setCondiments(condiments: Condiments["condiments"]){
        for(const condiment in condiments) {
            console.log(condiments, condiments[condiment])
        }
    }

    calcCondiments(condiments: Condiments["condiments"]){
        let tmp;
        let cost=this.beverage.cost();

        Object.keys(condiments).forEach(condiment => {
            const amount = condiments[condiment];
            for(let i=0; i<amount; i++) {
                tmp = this.decorateBeverage(condiment, tmp);
                this.decoratedBeverage = tmp;
                cost = tmp?.cost();
                this.cost = cost;
            }
        })
    }

    printReceipt(condiments:Condiments["condiments"]){
        const receipt =`${this.beverage.description} ${this.beverage.cost()}
        \n+${condiments[0]} added
        \ntotal cost: $${this.cost}`;
        console.log(receipt)
    }

    decorateBeverage(condiment: string, beverage:CondimentDecorator|Beverage){
        let decorator;
        switch(condiment){
            case CONDIMENTS.MILK: return decorator = new Milk(beverage? beverage : this.beverage);
            case CONDIMENTS.SOY: return decorator = new Soy(beverage? beverage : this.beverage);
            case CONDIMENTS.WHIP: return decorator = new Whip(beverage? beverage : this.beverage);
            case CONDIMENTS.MOCHA: return decorator = new Mocha(beverage? beverage : this.beverage);
        }
    }    
}

new Starbuzz({beverage: BEVERAGE.HOUSE_BLEND, condiments: {"두유":2, "모카":1}});