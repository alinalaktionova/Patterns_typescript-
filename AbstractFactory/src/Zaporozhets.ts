import {AbstractCarFactoryInterface} from "./AbstractCarFactoryInterface";
import * as PartsInterface from "./CarPartsInterfaces";
import * as ConcreteParts from "./CarParts";

export class Zaporozhets implements AbstractCarFactoryInterface{
    public createEngine(): PartsInterface.EngineInterface{
        return new ConcreteParts.ZaporozhetsEngine();
    }
    public createWheels(): PartsInterface.WheelsInterface{
        return new ConcreteParts.ZaporozhetsWheels();
    }
    public createBody(): PartsInterface.CarBodyInterface{
        return new ConcreteParts.ZaporozhetsCarBody();
    }

    public info(): string {
        return `${this.createEngine().engine()}, ${this.createWheels().wheels()}, ${this.createBody().body()}. Car of all times, Zaporozhets.`
    }
}