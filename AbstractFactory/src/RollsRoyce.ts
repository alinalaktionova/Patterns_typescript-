import {AbstractCarFactoryInterface} from "./AbstractCarFactoryInterface";
import * as PartsInterface from "./CarPartsInterfaces";
import * as ConcreteParts from "./CarParts";

export class RollsRoyse implements AbstractCarFactoryInterface{
    public createEngine(): PartsInterface.EngineInterface{
        return new ConcreteParts.RollsRoyseEngine();
    }
    public createWheels(): PartsInterface.WheelsInterface{
        return new ConcreteParts.RollsRoyseWheels();
    }
    public createBody(): PartsInterface.CarBodyInterface{
        return new ConcreteParts.RollsRoyseCarBody();
    }

    public info(): string {
        return `${this.createEngine().engine()}, ${this.createWheels().wheels()}, ${this.createBody().body()}. Legendary car, Rolls Royce.`
    }
}