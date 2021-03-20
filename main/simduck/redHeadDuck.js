import Duck from "./duck";
import FlyWithWings from "./flyWithWings";
import Quack from "./quack";

export default class RedHeadDuck extends Duck{
    constructor() {
        super(new FlyWithWings(), new Quack())
    }

    display() {
        console.log("I'm RealHeadDuck");
    }
}