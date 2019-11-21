import * as Parts from "./CarPartsInterfaces";

export interface AbstractCarFactoryInterface{
    createEngine(): Parts.EngineInterface;
    createWheels(): Parts.WheelsInterface;
    createBody(): Parts.CarBodyInterface;
    info(): string;
}
