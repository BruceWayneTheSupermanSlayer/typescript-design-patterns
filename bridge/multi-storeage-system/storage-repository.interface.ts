import {BaseEntity} from "./base-entity";

export interface StorageRepositoryInterface {
    store(entity: BaseEntity): void;
}