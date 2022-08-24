/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      destroy: (() => any) | any;

      getVehicle: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onSelectOption: (() => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      titleBarHeight: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnVehicleUI {}
}
