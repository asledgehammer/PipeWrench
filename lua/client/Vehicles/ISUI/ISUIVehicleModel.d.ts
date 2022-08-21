/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISUIVehicleModel:new */
    export class ISUIVehicleModel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      mouseDown: any;

      constructor(x: any, y: any, width: any, height: any);

      getView: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      setView: ((name: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISUIVehicleModel {}
}
