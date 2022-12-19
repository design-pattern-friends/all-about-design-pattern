"use strict";
exports.__esModule = true;
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.toppings = [];
        // get getName() {
        //   return this.name;
        // }
    }
    Pizza.prototype.prepare = function () {
        console.log('준비중: ' + this.name);
        console.log('반죽 만드는 중...');
        console.log('소스 만드는 중...');
        console.log('토핑 만드는 중...');
        for (var _i = 0, _a = this.toppings; _i < _a.length; _i++) {
            var topping = _a[_i];
            console.log(' ' + topping);
        }
    };
    Pizza.prototype.bake = function () {
        console.log('175도에서 25분간 굽기...');
    };
    Pizza.prototype.cut = function () {
        console.log('피자 사선으로 자르기...');
    };
    Pizza.prototype.box = function () {
        console.log('상자에 피자 담기');
    };
    return Pizza;
}());
exports.Pizza = Pizza;
