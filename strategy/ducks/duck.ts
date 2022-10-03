import {FlyBehaviourInterface} from "./fly-behaviour.interface";
import {DisplayInterface} from "./display.interface";
import {QuackBehaviourInterface} from "./quack-behaviour.interface";

export class Duck implements FlyBehaviourInterface, DisplayInterface, QuackBehaviourInterface {
    constructor(private flyBehaviour: FlyBehaviourInterface, private displayBehaviour: DisplayInterface, private quackBehaviour: QuackBehaviourInterface) {
    }

    display(): void {
        this.displayBehaviour.display();
    }

    fly(): void {
        this.flyBehaviour.fly();
    }

    quack(): void {
        this.quackBehaviour.quack();
    }


}