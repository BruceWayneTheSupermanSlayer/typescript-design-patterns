import {Duck} from "./duck";
import {NoQuacking} from "./no-quacking";
import {SimpleDisplay} from "./simple-display";
import {SimpleFlying} from "./simple-flying";


const noQuacking = new NoQuacking();
const simpleDisplay = new SimpleDisplay();
const simpleFly = new SimpleFlying();

const rubberDuck = new Duck(simpleFly, simpleDisplay, noQuacking);

rubberDuck.display();
rubberDuck.fly();
rubberDuck.quack();