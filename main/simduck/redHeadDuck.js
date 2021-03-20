import Duck from "./duck";

export default class RedHeadDuck extends Duck{
    fly() {
        console.log("I can fly");
    }

    quack() {
        console.log("I can do quack!");
    }

    display() {
        console.log("I'm RealHeadDuck");
    }
}