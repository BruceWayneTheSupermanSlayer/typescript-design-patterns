import {FlyweightInterface} from "./flyweight.interface";

export class ConcreteFlyweight implements FlyweightInterface {
    perform(customization: { id: string }): void {
        console.log(`call to concrete flyweight with param ${JSON.stringify(customization)}`);
    }
}