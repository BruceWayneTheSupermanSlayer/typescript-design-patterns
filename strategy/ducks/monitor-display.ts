import {DisplayInterface} from "./display.interface";

export class MonitorDisplay implements DisplayInterface {
    display(): void {
        console.log(`monitor-display`);
    }
}