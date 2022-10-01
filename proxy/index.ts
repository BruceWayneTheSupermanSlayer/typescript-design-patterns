interface IStore {
    save(data: string): void;
}

// concrete implementation

class TextStore implements IStore {
    save(data: string): void {
        console.log(`called Textstore to save data: ${data} `)
    }

}

// proxy implementation
class ProxyTextStore implements IStore {
    constructor(private textStore?: TextStore) {
    }

    save(data: string): void {
        console.log(`called proxy to store data`);
        if (!this.textStore) {
            console.log(`constructing TextStore object`);
            this.textStore = new TextStore();
        }
        this.textStore.save(data);
    }

}

const proxy = new ProxyTextStore();
proxy.save('value1');
proxy.save('value2');
proxy.save('value3');
proxy.save('value4');