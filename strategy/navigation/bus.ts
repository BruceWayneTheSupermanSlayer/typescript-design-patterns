import {TravelStrategyInterface} from "./travel-strategy.interface";

export class Bus implements TravelStrategyInterface {
    route(): void {
        console.log(`travelling via ${Bus.name}`)
    }
}