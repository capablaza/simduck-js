import Duck from "./duck";
import FlyNoWay from "./flyNoWay";
import Squeak from "./squeak";

export default class RubberDuck extends Duck {

    constructor() {
        super(new FlyNoWay(), new Squeak())
    }

    display() {
        console.log("I'm RubberDuck!")
    }

}