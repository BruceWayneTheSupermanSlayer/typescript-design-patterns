import {IMessageSender} from "./message-sender.interface";

export abstract class AbstractMessage {
    abstract sendMessage(msg: string): void;


    protected constructor(protected messageSender: IMessageSender) {
    }

}