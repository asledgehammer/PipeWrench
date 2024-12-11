/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISSpawnVehicleUI:new */
    export class ISSpawnVehicleUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      boolOptions: any;

      close: any;

      getKey: any;

      name: any;

      player: any;

      repair: any;

      spawn: any;

      titlebarbkg: any;

      vehicle: any;

      vehicleComboBox: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      destroy(...__args: never[]): any;

      getVehicle(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSelectOption(...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnVehicleUI {}
}
