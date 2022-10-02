import {
    EmailMessageService,
    LongMessage,
    PostalDelivery,
    ShortMessageService,
    SMSService
} from "./notification";

const smsService = new SMSService();
const emailService = new EmailMessageService();

// sending short message
const shortMessageViaSMS = new ShortMessageService(smsService);
const shortMessageViaEmail = new ShortMessageService(emailService);


// sending long message

const longMessageViaSMS = new LongMessage(smsService);
const longMessageViaEmail = new LongMessage(emailService);


const SAMPLE_MESSAGES = ["message_1", "message_2", "message_3", "message_4", "message_5", "message_6", "message_7", "message_8"];

SAMPLE_MESSAGES.forEach(message => {
    shortMessageViaEmail.sendMessage(message);
    shortMessageViaSMS.sendMessage(message);
    longMessageViaEmail.sendMessage(message);
    longMessageViaSMS.sendMessage(message);
})

/***
 * Extending the functionality now
 *
 * A new class PostalDelivery has been added
 */

const postalDelivery = new PostalDelivery();
const shortMessageViaPostal = new ShortMessageService(postalDelivery);
const longMessageViaPostal = new LongMessage(postalDelivery);

console.log(`\n`);
console.log(`***********************************************************`);
console.log(`\n`);

SAMPLE_MESSAGES.forEach(message => {
    shortMessageViaPostal.sendMessage(message);
    longMessageViaPostal.sendMessage(message);
})