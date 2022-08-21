/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addBattery: ((_items: any) => any) | any;

      powerUpdateSimulation: (() => any) | any;

      removeBattery: (() => any) | any;

      toggleOnOff: (() => any) | any;

      verifyItem: ((_item: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMPower {}
}
