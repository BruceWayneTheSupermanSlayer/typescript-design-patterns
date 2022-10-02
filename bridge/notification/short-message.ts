import {AbstractMessage} from "./abstract-message";
import {IMessageSender} from "./message-sender.interface";

export class ShortMessageService extends AbstractMessage {

    constructor(messageSender: IMessageSender) {
        super(messageSender);
        this.messageSender = messageSender;

    }


    override sendMessage(msg: string): void {
        this.messageSender.sendMessage(msg);
    }


}