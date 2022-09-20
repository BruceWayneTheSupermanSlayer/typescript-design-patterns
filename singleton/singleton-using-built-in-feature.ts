export class SingletonUsingBuiltInFeature {
    private static instance: SingletonUsingBuiltInFeature;

    private constructor() {
    }

    static getInstance() {
        if (!SingletonUsingBuiltInFeature.instance) {
            SingletonUsingBuiltInFeature.instance = new SingletonUsingBuiltInFeature();
        }
        return SingletonUsingBuiltInFeature.instance;
    }

    getUser(): Promise<any> {
        return Promise.resolve(["user_one", "user_two", "user_three"]);
    }
}

