import {HttpRequest} from "./http-request";
import {LogRequestHandler} from "./log-request-handler";
import {EmailRequestHandler} from "./email-request-handler";


const request = new HttpRequest('localhost', new Map<string, string>().set('q', 'searchTerm'));

new LogRequestHandler(new EmailRequestHandler(null)).handleRequest(request);