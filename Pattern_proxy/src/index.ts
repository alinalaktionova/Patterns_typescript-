import { RobotProxy } from './RobotProxy';
import { RobotInterface } from './RobotInterface';
import { clientCode } from './ClientCode';
import { Robot } from './Robot';

let robot = new Robot();
let myProxy = new RobotProxy(robot);
clientCode(robot);
