import {TravelStrategyInterface} from "./travel-strategy.interface";

export class Travel {
    constructor(private travelStrategy: TravelStrategyInterface) {
    }

    getRoute() {
        this.travelStrategy.route();
    }
}