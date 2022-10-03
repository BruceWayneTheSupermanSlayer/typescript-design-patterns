import {TravelStrategyInterface} from "./travel-strategy.interface";

export class Train implements TravelStrategyInterface {
    route(): void {
        console.log(`travelling via ${Train.name}`)
    }
}