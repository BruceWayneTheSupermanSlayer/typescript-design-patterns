import {Order} from "./order";

export class Agent {
    private orders: Order[] = [];

    placeOrder(order: Order): void {
        this.orders.push(order);
        order.execute();
    }

    listOrders(): string {
        return this.orders.reduce((acc, curr) => acc + curr.toString() + '\n', '');
    }
}