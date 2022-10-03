import {FlyBehaviourInterface} from "./fly-behaviour.interface";

export class SimpleFlying implements FlyBehaviourInterface {
    fly(): void {
        console.log('simple-flying')
    }

}