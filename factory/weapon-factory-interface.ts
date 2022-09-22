import {WeaponInterface} from "./weapon-interface";


export interface WeaponFactoryInterface {
  create(): WeaponInterface;
}