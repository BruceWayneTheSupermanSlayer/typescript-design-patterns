import {TravelStrategyInterface} from "./travel-strategy.interface";

export class Cycle implements TravelStrategyInterface {
    route(): void {
        console.log(`travelling via ${Cycle.name}`)
    }
}