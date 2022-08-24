/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addLabel: ((_x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      addSlider: ((_x: any, _y: any, _w: any, _h: any, _func: any) => any) | any;

      callbackAngleX: ((value: any, slider: any) => any) | any;

      callbackAngleY: ((value: any, slider: any) => any) | any;

      callbackAngleZ: ((value: any, slider: any) => any) | any;

      callbackHeight: ((value: any, slider: any) => any) | any;

      clearVehicle: (() => any) | any;

      onButtonBottom: (() => any) | any;

      onButtonDrop: (() => any) | any;

      onButtonLeft: (() => any) | any;

      onButtonLevel: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleAngles {}
}
