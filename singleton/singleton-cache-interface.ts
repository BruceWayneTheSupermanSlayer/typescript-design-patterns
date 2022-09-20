export interface ISingletonCache<K, V> {
    put(key: K, value: V): boolean;

    get(key: K): V;
}