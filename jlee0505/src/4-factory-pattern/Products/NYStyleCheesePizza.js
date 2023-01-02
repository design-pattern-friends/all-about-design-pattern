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
exports.NYStyleCheesePizza = void 0;
var Pizza_1 = require("../interface/Pizza");
var NYStyleCheesePizza = /** @class */ (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = '뉴욕 스타일 소스와 치즈 피자';
        _this.dough = '씬 크러스트 도우';
        _this.sauce = '마리나라 소스';
        _this.toppings.push('잘게 썬 레지아노 치즈');
        return _this;
    }
    return NYStyleCheesePizza;
}(Pizza_1.Pizza));
exports.NYStyleCheesePizza = NYStyleCheesePizza;
