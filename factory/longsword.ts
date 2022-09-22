import {WeaponInterface} from "./weapon-interface";


export class Longsword implements WeaponInterface {
  getDamage(): number {
    return 20;
  }

  getName(): string {
    return "LongSword";
  }

  getRange(): number {
    return 5;
  }

}