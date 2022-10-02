export class BaseEntity {
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _id: number = 0;


}