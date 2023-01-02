"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NYPizzaStore = void 0;
var PizzaStore_1 = require("../interface/PizzaStore");
var NYStyleCheesePizza_1 = require("../Products/NYStyleCheesePizza");
var NYPizzaStore = /** @class */ (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese')
            return new NYStyleCheesePizza_1.NYStyleCheesePizza();
    };
    return NYPizzaStore;
}(PizzaStore_1.PizzaStore));
exports.NYPizzaStore = NYPizzaStore;
