import {StorageRepositoryInterface} from "./storage-repository.interface";
import {BaseEntity} from "./base-entity";

export abstract class BaseRepository {
    protected constructor(protected storageRepository: StorageRepositoryInterface) {
    }

    abstract save(entity: BaseEntity): void;
}