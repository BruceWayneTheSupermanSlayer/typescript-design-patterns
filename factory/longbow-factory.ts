import {WeaponFactoryInterface} from "./weapon-factory-interface";
import {WeaponInterface} from "./weapon-interface";
import {Longbow} from "./longbow";

export class LongbowFactory implements WeaponFactoryInterface {

  create(): WeaponInterface {
    return new Longbow();
  }

}