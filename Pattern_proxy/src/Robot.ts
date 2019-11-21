import { RobotInterface } from './RobotInterface';

export class Robot implements RobotInterface {
  walkStraightForward(value: number): void {
    console.log(`I walked ${value} steps`);
  }
  turnRight(): void {
    console.log('I turned right');
  }

  turnLeft(): void {
    console.log('I turned left');
  }
  defuseBomb(): void {
    console.log('The bomb is defused');
  }
}
