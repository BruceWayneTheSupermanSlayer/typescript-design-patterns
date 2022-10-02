import {IMessageSender} from "./message-sender.interface";

export class PostalDelivery implements IMessageSender {
    sendMessage(msg: string): void {
        console.log(`${msg} has been sent via postal delivery`);
    }
}