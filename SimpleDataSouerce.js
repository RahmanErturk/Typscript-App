"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this._products = new Array(new Product_1.Product(1, 'Samsung S23', 'Smartphone', 1000), new Product_1.Product(2, 'Samsung S22', 'Smartphone', 800), new Product_1.Product(3, 'Iphone 15 Pro Max', 'Smartphone', 1400), new Product_1.Product(4, 'Iphone 15 Pro', 'Smartphone', 1200));
    }
    Object.defineProperty(SimpleDataSource.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
