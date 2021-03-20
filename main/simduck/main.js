import FlyWithWings from './flyWithWings';
import RealGreenDuck from './realGreenDuck'
import RedHeadDuck from './redHeadDuck';
import RubberDuck from './rubberDuck';

function main() {

    actions(new RealGreenDuck())
    actions(new RedHeadDuck())
    var rubberDuck = new RubberDuck();
    actions(rubberDuck)
    
    console.log('\n###### setting new behavior #####\n')
    rubberDuck.setFlyBehavior(new FlyWithWings());
    actions(rubberDuck)

}

function actions(duck) {
    duck.display()
    duck.swim()
    duck.performQuack()
    duck.performFly()
    console.log('------------------')
}


main();