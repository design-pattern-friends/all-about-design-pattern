"use strict";
exports.__esModule = true;
var DarkRoast_js_1 = require("./concrete_classes/beverage/DarkRoast.js");
var Decaf_js_1 = require("./concrete_classes/beverage/Decaf.js");
var Espresso_js_1 = require("./concrete_classes/beverage/Espresso.js");
var HouseBlend_js_1 = require("./concrete_classes/beverage/HouseBlend.js");
var Milk_js_1 = require("./concrete_classes/condiments/Milk.js");
var Mocha_js_1 = require("./concrete_classes/condiments/Mocha.js");
var Soy_js_1 = require("./concrete_classes/condiments/Soy.js");
var Whip_js_1 = require("./concrete_classes/condiments/Whip.js");
var constants_js_1 = require("./constants/constants.js");
var Starbuzz = /** @class */ (function () {
    function Starbuzz(orders) {
        this.parseOrder(orders);
        this.printReceipt(orders.condiments);
    }
    Starbuzz.prototype.parseOrder = function (orders) {
        this.setBeverage(orders.beverage);
        if (orders.condiments) {
            this.calcCondiments(orders.condiments);
            this.setCondiments(orders.condiments);
        }
    };
    Starbuzz.prototype.setBeverage = function (beverage) {
        switch (beverage) {
            case constants_js_1.BEVERAGE.HOUSE_BLEND:
                this.beverage = new HouseBlend_js_1.HouseBlend();
                break;
            case constants_js_1.BEVERAGE.DARK_ROAST:
                this.beverage = new DarkRoast_js_1.DarkRoast();
                break;
            case constants_js_1.BEVERAGE.DECAF:
                this.beverage = new Decaf_js_1.Decaf();
                break;
            case constants_js_1.BEVERAGE.ESPRESSO:
                this.beverage = new Espresso_js_1.Espresso();
                break;
        }
    };
    Starbuzz.prototype.setCondiments = function (condiments) {
        for (var condiment in condiments) {
            console.log(condiments, condiments[condiment]);
        }
    };
    Starbuzz.prototype.calcCondiments = function (condiments) {
        var _this = this;
        var tmp;
        var cost = this.beverage.cost();
        Object.keys(condiments).forEach(function (condiment) {
            var amount = condiments[condiment];
            for (var i = 0; i < amount; i++) {
                tmp = _this.decorateBeverage(condiment, tmp);
                _this.decoratedBeverage = tmp;
                cost = tmp === null || tmp === void 0 ? void 0 : tmp.cost();
                _this.cost = cost;
            }
        });
    };
    Starbuzz.prototype.printReceipt = function (condiments) {
        var receipt = "".concat(this.beverage.description, " ").concat(this.beverage.cost(), "\n        \n+").concat(condiments[0], " added\n        \ntotal cost: $").concat(this.cost);
        console.log(receipt);
    };
    Starbuzz.prototype.decorateBeverage = function (condiment, beverage) {
        var decorator;
        switch (condiment) {
            case constants_js_1.CONDIMENTS.MILK: return decorator = new Milk_js_1.Milk(beverage ? beverage : this.beverage);
            case constants_js_1.CONDIMENTS.SOY: return decorator = new Soy_js_1.Soy(beverage ? beverage : this.beverage);
            case constants_js_1.CONDIMENTS.WHIP: return decorator = new Whip_js_1.Whip(beverage ? beverage : this.beverage);
            case constants_js_1.CONDIMENTS.MOCHA: return decorator = new Mocha_js_1.Mocha(beverage ? beverage : this.beverage);
        }
    };
    return Starbuzz;
}());
new Starbuzz({ beverage: constants_js_1.BEVERAGE.HOUSE_BLEND, condiments: { "두유": 2, "모카": 1 } });
