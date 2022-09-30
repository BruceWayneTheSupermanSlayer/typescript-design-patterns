import {IActionCreator} from "./action.interface";
import {CustomAction} from "./custom-action";

export class Action implements IActionCreator {
    constructor(private readonly customActionCreator: CustomAction = new CustomAction()) {

    }

    createAction(name: string): Promise<void> {
        return new Promise<void>((resolve, _) => {
            this.customActionCreator.createCustomAction(name);
            resolve();
        })
    }

}