import { Product } from "./Product";

export class SimpleDataSource {
    private _products: Array<Product>

    constructor () {
        this._products = new Array<Product>(
            new Product(1, 'Samsung S23', 'Smartphone', 1000),
            new Product(2, 'Samsung S22', 'Smartphone', 800),
            new Product(3, 'Iphone 15 Pro Max', 'Smartphone', 1400),
            new Product(4, 'Iphone 15 Pro', 'Smartphone', 1200),
        );
    }

    get products(): Array<Product> {
        return this._products;
    }
}
