import {IHeroPrototype} from "./hero-prototype-interface";

export class Warrior implements IHeroPrototype {

    private weapon: string;
    private health: number;

    constructor(private name: string) {
        this.weapon = "Dagger";
        this.health = 150;
    }

    clone(): Warrior {
        const cloned = Object.create(Warrior.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "weapon") {
                cloned[key] = "Bare Hands";
            } else {
                cloned[key] = this[key as keyof this];
            }
        });
        return cloned;
    }

}