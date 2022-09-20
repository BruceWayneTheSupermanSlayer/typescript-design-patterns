import "reflect-metadata";
import {Container, injectable} from "inversify";

interface IUserApiService {
    getUsers(): Promise<string[]>;
}

let TYPES = {
    UsersApiService: Symbol("UsersApiService"),
}

@injectable()
class UserApiServiceImpl implements IUserApiService {

    getUsers(): Promise<string[]> {
        return Promise.resolve(["user_one", "user_two"]);
    }

}

const container = new Container();
container.bind<IUserApiService>(TYPES.UsersApiService)
    .to(UserApiServiceImpl)
    .inSingletonScope();

container.get<IUserApiService>(TYPES.UsersApiService).getUsers().then(res => console.log(res));