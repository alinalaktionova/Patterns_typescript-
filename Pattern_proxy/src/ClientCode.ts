import { RobotInterface } from './RobotInterface';

export function clientCode(subject: RobotInterface) {
  subject.walkStraightForward(23);
  subject.turnRight();
  subject.turnLeft();
  subject.defuseBomb();
}
