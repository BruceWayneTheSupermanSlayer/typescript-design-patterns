import {QuackBehaviourInterface} from "./quack-behaviour.interface";

export class SimpleQuacking implements QuackBehaviourInterface {
    quack(): void {
        console.log('simple-quack');
    }

}