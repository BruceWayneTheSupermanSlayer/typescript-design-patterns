import {QuackBehaviourInterface} from "./quack-behaviour.interface";

export class NoQuacking implements QuackBehaviourInterface {
    quack(): void {
        console.log(`no-quacking`);
    }
}