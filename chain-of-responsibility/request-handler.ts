import {RequestInterface} from "./request.interface";

export abstract class RequestHandler {
    constructor(protected next: RequestHandler | null) {
    }

    handleRequest(request: RequestInterface) {
        if (this.next !== null) {
            this.next.handleRequest(request);
        }
    }

}