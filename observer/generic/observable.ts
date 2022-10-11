import {IObservable} from "./observable.interface";

export class Observable extends IObservable {
    notify(): void {
        console.log(`notifying all subscribers`);
        for (const observer of this.observers) {
            observer.update(this.getData())
        }
    }

    getData(): number {
        return Math.floor(Math.random() * 100);
    }


}
