import {IMessageSender} from "./message-sender.interface";

export class EmailMessageService implements IMessageSender {
    sendMessage(msg: string): void {
        console.log(`${msg} has been sent via email`)
    }
}