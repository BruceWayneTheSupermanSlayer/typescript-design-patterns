import {EmailMessageService, LongMessage, PostalDelivery, ShortMessageService, SMSService} from "./notification";
import {DatabaseStorage, FileStorage, Student, StudentRepository} from "./multi-storeage-system";

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


console.log(`\n`);
console.log(`🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨`);
console.log(`implementing student storage system`);
console.log(`\n`);

/*
* Student storage, student can be either stored in database or they can stored in a file
* */


const fileBasedStorage = new FileStorage();
const databaseStorage = new DatabaseStorage();
const saveStudentInFile = new StudentRepository(fileBasedStorage);
const saveStudentInDatabase = new StudentRepository(databaseStorage);

const SAMPLE_STUDENTS = [{name: 'student_1', id: 1}, {name: 'student_2', id: 2}, {
    name: 'student_3',
    id: 3
}, {name: 'student_4', id: 4}]


SAMPLE_STUDENTS.forEach(student => {
    const {id, name} = student;
    saveStudentInDatabase.save({id, name} as Student);
    saveStudentInFile.save({id, name} as Student)
})


