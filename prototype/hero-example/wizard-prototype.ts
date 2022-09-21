import {IHeroPrototype} from "./hero-prototype-interface";

export class Wizard implements IHeroPrototype {

    private spells: string[];
    private health: number;


    constructor(private name: string) {
        this.health = 100;
        this.spells = [];
    }

    clone(): Wizard {
        const cloned = Object.create(Wizard.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "name") {
                cloned[key] = "Unknown";
            } else {
                cloned[key] = this[key as keyof this];
            }
        });
        return cloned;
    }
}