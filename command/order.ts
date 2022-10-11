export abstract class Order {
    protected uid = Math.floor(Math.random() * 10000);
    protected type: string = '';

    public toString() {
        return `UID: ${this.uid} - Operation: ${this.type}`
    }

    abstract execute(): void;
}