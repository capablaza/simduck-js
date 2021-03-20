import RealGreenDuck from './realGreenDuck'
import RedHeadDuck from './redHeadDuck';
import RubberDuck from './rubberDuck';

function main() {

    actions(new RealGreenDuck())
    actions(new RedHeadDuck())
    actions(new RubberDuck())

}

function actions(duck) {
    duck.display()
    duck.swim()
    duck.performQuack()  
    duck.performFly()
    console.log('------------------')
}


main();