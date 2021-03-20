export default class Duck {
    quack() {
        console.log("I can do quack!")
    }

    swim() {
        console.log("I can swim!")
    }
    fly() {
        console.log("I can fly");
    }
}

Duck.prototype.display = function () {
    //TODO
}