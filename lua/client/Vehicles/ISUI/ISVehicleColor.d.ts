/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addLabel(_x: any, _y: any, _title: any, _font: any, _bLeft: any, ...__args: never[]): any;

      addSlider(_x: any, _y: any, _w: any, _h: any, _func: any, ...__args: never[]): any;

      callbackAngleX(value: any, slider: any, ...__args: never[]): any;

      callbackAngleY(value: any, slider: any, ...__args: never[]): any;

      callbackAngleZ(value: any, slider: any, ...__args: never[]): any;

      clearVehicle(...__args: never[]): any;

      onButtonBlack(...__args: never[]): any;

      onButtonBlue(...__args: never[]): any;

      onButtonNextSkin(...__args: never[]): any;

      onButtonOther(...__args: never[]): any;

      onButtonRed(...__args: never[]): any;

      onButtonWhite(...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleColor {}
}
