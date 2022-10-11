import {IObserver} from "./observer.interface";

export class Observer implements IObserver {
    update(data: any): void {
        console.log(`got data from observable ${data}`);
    }
}