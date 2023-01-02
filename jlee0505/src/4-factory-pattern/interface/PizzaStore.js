"use strict";
exports.__esModule = true;
exports.PizzaStore = void 0;
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        this.pizza = this.createPizza(type);
        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box();
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
