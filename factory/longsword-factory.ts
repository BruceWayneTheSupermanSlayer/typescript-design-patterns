import {WeaponFactoryInterface} from "./weapon-factory-interface";
import {Longsword} from "./longsword";
import {WeaponInterface} from "./weapon-interface";

export class LongswordFactory implements WeaponFactoryInterface {
  create(): WeaponInterface {
    return new Longsword();
  }

}