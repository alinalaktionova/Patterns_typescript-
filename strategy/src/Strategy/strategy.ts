// method separation
interface FillStrategy {
  fill(): string;
}

export class FillWithGas implements FillStrategy {
  fill(): string {
    return 'Filled with gas';
  }
}

export class FillBattery implements FillStrategy {
  fill(): string {
    return 'Battery has charged';
  }
}

///abstract basic class
abstract class Auto {
  constructor(
    public name: string,
    protected fillStrategy: FillStrategy = new FillWithGas()
  ) {}

  fill(): void {
    console.log(`${this.name}: ${this.fillStrategy.fill()}`);
  }

  gas(): void {
    console.log(`${this.name}: go`);
  }

  stop(): void {
    console.log(`${this.name}: stop!!!`);
  }
}

export class GasAuto extends Auto {}

export class BatteryAuto extends Auto {}

export class HibridAuto extends Auto {
  setFillStrategy(fillStrategy: FillStrategy): void {
    this.fillStrategy = fillStrategy;
  }
}
