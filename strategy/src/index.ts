import {
  GasAuto,
  BatteryAuto,
  HibridAuto,
  FillWithGas,
  FillBattery
} from './Strategy/strategy';

const gasAuto = new GasAuto('Land Rover');
gasAuto.fill();

const batteryAuto = new BatteryAuto('Tesla', new FillBattery());
batteryAuto.fill();

const hibridAuto = new HibridAuto('Volvo Hybrid');
hibridAuto.fill();

hibridAuto.setFillStrategy(new FillBattery());
hibridAuto.fill();

hibridAuto.setFillStrategy(new FillWithGas());
hibridAuto.fill();
hibridAuto.gas();
