import { createProduct, addProductToService } from './src/product';
import { createOrder, addOrderToService } from './src/order';

createProduct('Laptop', 1200);
addProductToService('Electronics', 'Laptop');
createOrder(['Laptop', 'Mouse', 'Keyboard']);
addOrderToService('OnlineShop', 'Order123');
