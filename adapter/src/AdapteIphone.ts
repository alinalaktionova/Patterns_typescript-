import {IosInterface} from "./IosInterface";
import {AndroidInterface} from "./AndroidInterface";

export class LightingToMicroUsb implements AndroidInterface {
    private iphoneDevice: IosInterface;

    constructor(iphone: IosInterface) {
        this.iphoneDevice = iphone;
    }

    microUsbCharger(): void {
        console.log("Want to use MicroUSB, convert lo Lighting");
        this.iphoneDevice.lightCharger();
    }
}
