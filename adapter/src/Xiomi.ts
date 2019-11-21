import {AndroidInterface} from "./AndroidInterface";

class Xiomi implements AndroidInterface{
    microUsbCharger(): void {
        console.log("using miniUsb");
    }
}
