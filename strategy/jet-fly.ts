import {FlyBehaviourInterface} from "./fly-behaviour.interface";

export class JetFly implements FlyBehaviourInterface {
    fly(): void {
        console.log('jet-fly');
    }

}