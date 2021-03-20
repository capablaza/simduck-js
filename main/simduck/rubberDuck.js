import Duck from "./duck";

export default class RubberDuck extends Duck{
    display() {
        console.log("I'm RubberDuck!")
    }

    fly() {
        console.log("I can't fly");
    }

    quack() {
        console.log("I can do quack!");
    }
}