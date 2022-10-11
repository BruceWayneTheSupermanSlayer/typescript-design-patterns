import {Observable} from "./observable";
import {Observer} from "./observer";

const observable = new Observable();

const observer = new Observer();
observable.subscribe(observer);

for (let i = 0; i < 5; i++) {
    observable.notify();
}