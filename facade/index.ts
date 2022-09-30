interface ServiceA {
    action(): void;
}

interface ServiceB {
    action(): void;
}

class ServiceAImpl implements ServiceA {
    action(): void {
        console.log(`performing action in service A`)
    }

}

class ServiceBImpl implements ServiceB {
    action(): void {
        console.log(`performing action in service B`)
    }
}

class Facade {
    constructor(private serviceA: ServiceA, private serviceB: ServiceB) {
    }

    perform() {
        this.serviceA.action();
        this.serviceB.action();
    }
}

new Facade(new ServiceAImpl(),new ServiceBImpl()).perform()
