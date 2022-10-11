import {Order} from "./order";
import {StockTrade} from "./stock-trade";

export class BuyStock extends Order {

    private readonly stockTrade: StockTrade;

    constructor() {
        super();
        this.type = 'Buy';
    }

    execute(): void {
    }

}