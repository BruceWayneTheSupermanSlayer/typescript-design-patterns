import {BaseEntity} from "./base-entity";

export class Student extends BaseEntity {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _name: string = '';


}