import {StorageRepositoryInterface} from "./storage-repository.interface";
import {BaseEntity} from "./base-entity";

export class FileStorage implements StorageRepositoryInterface {
    store(entity: BaseEntity): void {
        console.log(`storing ${JSON.stringify(entity)} in ${FileStorage.name}`)
    }
}