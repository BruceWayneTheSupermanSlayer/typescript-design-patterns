import {Wizard} from "./hero-example/wizard-prototype";
import {Warrior} from "./hero-example/warrior-prototype";
import {IHeroPrototype} from "./hero-example/hero-prototype-interface";

let wiz: IHeroPrototype = new Wizard("Rohit");
let war: IHeroPrototype = new Warrior("Rohit");

console.log(wiz.clone());
console.log(war.clone());