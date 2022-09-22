import {LongbowFactory} from "./longbow-factory";
import {WeaponFactoryInterface} from "./weapon-factory-interface";
import {LongswordFactory} from "./longsword-factory";

const lsf = new LongswordFactory();
const lbf = new LongbowFactory();

const factories: WeaponFactoryInterface[] = [lsf, lbf, lsf, lsf];
factories.map((factory: WeaponFactoryInterface) => {
  console.log(factory.create().getDamage())
})