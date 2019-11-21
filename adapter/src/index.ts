import {LightingToMicroUsb} from "./AdapteIphone";
import {Iphone} from "./Iphone";
import {IosInterface} from "./IosInterface";


const iphone7: IosInterface = new Iphone();
const adapter = new LightingToMicroUsb(iphone7);

adapter.microUsbCharger();
