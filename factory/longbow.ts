import {WeaponInterface} from "./weapon-interface";


export class Longbow implements WeaponInterface {

  getDamage(): number {
    return 10;
  }

  getName(): string {
    return "LongBow";
  }

  getRange(): number {
    return 100;
  }

}