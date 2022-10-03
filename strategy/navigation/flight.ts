import {TravelStrategyInterface} from "./travel-strategy.interface";

export class Flight implements TravelStrategyInterface {
    route(): void {
        console.log(`travelling via ${Flight.name}`)
    }
}