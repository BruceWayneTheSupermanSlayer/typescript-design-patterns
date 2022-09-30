function LogCall() {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const caller = descriptor.value;
        descriptor.value = (message: string) => {
            console.log(`Before sending message event ${message}`)
            // @ts-ignore
            caller.apply(this, [message]);
            console.log(`after sending message ${message}`);
            return caller;
        }
        return descriptor;
    }
}

class EventService {
    @LogCall()
    createEvent(message: string): void {
        console.log(`currently sending event ${message}`)
    }
}

new EventService().createEvent("Message")