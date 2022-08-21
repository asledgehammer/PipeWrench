/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleHSV:new */
    export class ISVehicleHSV extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      colorHue: any;

      colorSaturation: any;

      colorValue: any;

      nextSkinButton: any;

      script: any;

      scriptName: any;

      vehicle: any;

      constructor(playerObj: any);

      addLabel: ((_x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      addSlider: ((_x: any, _y: any, _w: any, _h: any, _func: any) => any) | any;

      callbackAngleX: ((value: any, slider: any) => any) | any;

      callbackAngleY: ((value: any, slider: any) => any) | any;

      callbackAngleZ: ((value: any, slider: any) => any) | any;

      clearVehicle: (() => any) | any;

      onButtonBlack: (() => any) | any;

      onButtonBlue: (() => any) | any;

      onButtonNextSkin: (() => any) | any;

      onButtonOther: (() => any) | any;

      onButtonRed: (() => any) | any;

      onButtonWhite: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleColor {}
}
