import * as Parts from "./CarPartsInterfaces";

export class RollsRoyseEngine implements Parts.EngineInterface {
    public engine(): string { 
        return "Nice engine";
    }
}
export class RollsRoyseWheels implements Parts.WheelsInterface {
    public wheels(): string { 
        return "Exellent wheels";
    }
}
export class RollsRoyseCarBody implements Parts.CarBodyInterface {
    public body(): string { 
        return "Perfect body";
    }
}

export class ZaporozhetsEngine implements Parts.EngineInterface {
    public engine(): string { 
        return "Powerful engine";
    }
}
export class ZaporozhetsWheels implements Parts.WheelsInterface {
    public wheels(): string { 
        return "Reliable wheels";
    }
}
export class ZaporozhetsCarBody implements Parts.CarBodyInterface {
    public body(): string { 
        return "Strong body";
    }
}