import {Flight} from "./flight";
import {Train} from "./train";
import {Bus} from "./bus";
import {Cycle} from "./cycle";
import {Travel} from "./travel";

const flight = new Flight();
const train = new Train();
const bus = new Bus();
const cycle = new Cycle();

const modes = [flight, bus, train, cycle];

modes.forEach(mode => {
    const travel = new Travel(mode);
    travel.getRoute();
})