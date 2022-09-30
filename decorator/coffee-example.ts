abstract class Beverage {
    cost(): number {
        return 0;
    }

    getDescription(): string {
        return "Default impl";
    }

}

class Espresso extends Beverage {

    override cost(): number {
        return 10.99;
    }

    override getDescription(): string {
        return "Espresso";
    }
}

class HouseBlend extends Beverage {
    override cost(): number {
        return 12.99;
    }

    override getDescription(): string {
        return "HouseBlend";
    }
}

abstract class CondimentDecorator extends Beverage {
    public abstract override getDescription(): string;
}

class Mocha extends CondimentDecorator {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    override cost(): number {
        return this.beverage.cost() + 19.99;
    }

    override getDescription() {
        return this.beverage.getDescription() + ",Mocha";
    }
}

class Whip extends CondimentDecorator {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    override cost(): number {
        return this.beverage.cost() + 29.99;
    }

    override getDescription() {
        return this.beverage.getDescription() + ",Whip";
    }
}

const coffee = new Whip(new Mocha(new Mocha(new Espresso())));

console.log(coffee.getDescription())
console.log(coffee.cost())