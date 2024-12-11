/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMPower:new */
    export class RWMPower extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      batteryStatus: any;

      batteryTex: any;

      fontheight: any;

      itemDropBox: any;

      led: any;

      toggleOnOffButton: any;

      constructor(x: any, y: any, width: any, height: any);

      addBattery(_items: any, ...__args: never[]): any;

      powerUpdateSimulation(...__args: never[]): any;

      removeBattery(...__args: never[]): any;

      toggleOnOff(...__args: never[]): any;

      verifyItem(_item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMPower {}
}
