/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleAngles:new */
    export class ISVehicleAngles extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      angleX: any;

      angleY: any;

      angleZ: any;

      script: any;

      scriptName: any;

      sliderZ: any;

      vehicle: any;

      constructor();

      addLabel(_x: any, _y: any, _title: any, _font: any, _bLeft: any, ...__args: never[]): any;

      addSlider(_x: any, _y: any, _w: any, _h: any, _func: any, ...__args: never[]): any;

      callbackAngleX(value: any, slider: any, ...__args: never[]): any;

      callbackAngleY(value: any, slider: any, ...__args: never[]): any;

      callbackAngleZ(value: any, slider: any, ...__args: never[]): any;

      callbackHeight(value: any, slider: any, ...__args: never[]): any;

      clearVehicle(...__args: never[]): any;

      onButtonBottom(...__args: never[]): any;

      onButtonDrop(...__args: never[]): any;

      onButtonLeft(...__args: never[]): any;

      onButtonLevel(...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleAngles {}
}
