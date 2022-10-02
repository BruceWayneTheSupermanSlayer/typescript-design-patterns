import {ConcreteFlyweight} from "./concrete-flyweight";

export class FlyweightFactory {
    private readonly cache = new Map<Object, ConcreteFlyweight>;

    create(sharedState: Object): ConcreteFlyweight {
        if (!this.cache.has(sharedState)) {
            this.cache.set(sharedState, new ConcreteFlyweight());
        }
        // @ts-ignore
        return this.cache.get(sharedState);
    }

}