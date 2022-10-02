import {BaseRepository} from "./base-repository";
import {StorageRepositoryInterface} from "./storage-repository.interface";
import {Student} from "./student";

export class StudentRepository extends BaseRepository {
    constructor(public storageRepository: StorageRepositoryInterface) {
        super(storageRepository);
        this.storageRepository = storageRepository;
    }

    save(student: Student): void {
        this.storageRepository.store(student);
    }

}