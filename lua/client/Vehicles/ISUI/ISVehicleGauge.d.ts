/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleGauge:new */
    export class ISVehicleGauge extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      maxAngle: any;

      minAngle: any;

      needleX: any;

      needleY: any;

      texture: any;

      constructor(x: any, y: any, texture: any, needleX: any, needleY: any, minAngle: any, maxAngle: any);

      setNeedleWidth(width: any, ...__args: never[]): any;

      setTexture(texture: any, ...__args: never[]): any;

      setValue(value: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleGauge {}
}
