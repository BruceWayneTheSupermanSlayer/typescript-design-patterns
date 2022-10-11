import {RequestHandler} from "./request-handler";
import {RequestInterface} from "./request.interface";

export class EmailRequestHandler extends RequestHandler {

    override handleRequest(request: RequestInterface) {
        console.log('Request with origin: ${request.getOrigin()} handled by EmailRequestHandler');
        if (!this.next !== null) {
            this.next?.handleRequest(request);
        }
    }

}