import {IActionCreator} from "./action.interface";
import {Action} from "./action";

class Client {
    private readonly actionCreator: IActionCreator;

    constructor() {
        this.actionCreator = new Action();
    }

    dispatchAction(name: string) {
        this.actionCreator.createAction(name);
    }
}

const client = new Client();
client.dispatchAction('some random action')