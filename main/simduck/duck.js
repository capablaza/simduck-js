export default class Duck {

    swim() {
        console.log("I can swim!")
    }

}

Duck.prototype.display = function () { }
Duck.prototype.fly = () => { }
Duck.prototype.quack = () => { }