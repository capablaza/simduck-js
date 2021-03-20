import Duck from "./duck";

export default class RealGreenDuck extends Duck{

    fly() {
        console.log("I can fly");
    }

    quack() {
        console.log("I can do quack!");
    }

    display() {
        console.log("I'm Real Green Duck!")
    }
}