import {AbstractCarFactoryInterface} from "./AbstractCarFactoryInterface";
import {RollsRoyse} from "./RollsRoyce";
import {Zaporozhets} from "./Zaporozhets";


const myRollsRoyce:  AbstractCarFactoryInterface = new RollsRoyse();
const myZaporozhets: AbstractCarFactoryInterface = new Zaporozhets();

console.log(myRollsRoyce.info());
console.log(myZaporozhets.info());