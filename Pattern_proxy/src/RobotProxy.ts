import { RobotInterface } from './RobotInterface';
import { Robot } from './Robot';

export class RobotProxy implements RobotInterface {
  private _bombRobot: Robot;
  constructor(_bombRobot: Robot = null) {
    this._bombRobot = _bombRobot;
  }
  walkStraightForward(value: number): void {
    this._checkConnectionToRobot();
    this._bombRobot.walkStraightForward(value);
  }
  turnRight(): void {
    this._checkConnectionToRobot();
    this._bombRobot.turnRight();
  }

  turnLeft(): void {
    this._checkConnectionToRobot();
    this._bombRobot.turnLeft();
  }
  defuseBomb(): void {
    this._checkConnectionToRobot();
    this._bombRobot.defuseBomb();
  }
  private _checkConnectionToRobot(): void {
    if (this._bombRobot === null) {
      this._bombRobot = new Robot();
    }
  }
}
