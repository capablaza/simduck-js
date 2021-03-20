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

}

Duck.prototype.display = function () { }