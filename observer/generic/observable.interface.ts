import {IObserver} from "./observer.interface";

export abstract class IObservable {
    protected observers: IObserver[] = [];

    subscribe(observer: IObserver) {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    protected abstract notify(): void;

}
