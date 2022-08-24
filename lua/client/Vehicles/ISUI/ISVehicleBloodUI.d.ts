/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleBloodUI:new */
    export class ISVehicleBloodUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      script: any;

      scriptName: any;

      sliderBlood: any;

      tickBoxAll: any;

      vehicle: any;

      constructor(playerObj: any);

      addLabel: ((_x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      addSlider: ((_x: any, _y: any, _w: any, _h: any, _func: any) => any) | any;

      callbackBlood: ((value: any, slider: any) => any) | any;

      clearVehicle: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleBloodUI {}
}
