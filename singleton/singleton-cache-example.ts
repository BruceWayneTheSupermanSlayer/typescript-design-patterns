import {ISingletonCache} from "./singleton-cache-interface";


export class SingletonCacheExample implements ISingletonCache<string, any> {

    private static singletonCacheInstance: SingletonCacheExample;
    private map: Map<string, any>;

    private constructor() {
        this.map = new Map<string, any>();
    }

    static get instance() {
        if (!SingletonCacheExample.singletonCacheInstance) {
            SingletonCacheExample.singletonCacheInstance = new SingletonCacheExample();
        }
        return SingletonCacheExample.singletonCacheInstance;
    }

    get(key: string): any {
        return this.map.get(key);
    }

    put(key: string, value: any): boolean {
        this.map.set(key, value);
        return false;
    }

}