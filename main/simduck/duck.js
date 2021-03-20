export default class Duck {
    constructor(fly, quack) {
        this.flyBehavior = fly
        this.quackBehavior = quack
    }

    performQuack() {
        this.quackBehavior.quack()
    }

    performFly() {
        this.flyBehavior.fly()
    }

    swim() {
        console.log("I can swim!")
    }

    setFlyBehavior(behavior) {
        this.flyBehavior = behavior;
    }

    setQuackBehavior(behavior) {
        this.quackBehavior = behavior;
    }

}

Duck.prototype.display = function () { }