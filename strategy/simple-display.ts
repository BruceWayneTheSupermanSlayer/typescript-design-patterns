import {DisplayInterface} from "./display.interface";

export class SimpleDisplay implements DisplayInterface {
    display(): void {
        console.log('simple-display')
    }

}