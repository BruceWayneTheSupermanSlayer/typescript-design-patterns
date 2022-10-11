import {RequestInterface} from "./request.interface";

export class HttpRequest implements RequestInterface {
    constructor(private origin: string, private params: Map<string, string>) {

    }

    getOrigin(): string {
        return this.origin;
    }

    getParams(): Map<string, string> {
        return this.params;
    }
}