export type Builder<T> = {
    [k in keyof T]?: (arg: T[k]) => Builder<T>
} & {
    build(): T
};

export function MordernBuilder<T>(): Builder<T> {
    const built: Record<string, any> = {};
    const builder = new Proxy({}, {
        get(target, prop) {
            if ("build" === prop) {
                return () => built;
            }
            return (x: unknown): unknown => {
                built[prop.toString()] = x;
                return builder;
            }
        }

    })
    return builder as Builder<T>;
};

interface User {
    id: number;
    name: string;
    email: string;
}


const user = MordernBuilder<User>()
    .id(1)
    .email("a@mail.com")
    .name("Rohit")
    .build();

console.log(user);