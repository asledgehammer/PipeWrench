/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor BaseServerSettingsPanel:new */
    export class BaseServerSettingsPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;
    }

    /** @customConstructor ServerSettingsScreen:new */
    export class ServerSettingsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      joyfocus: any;

      pageDelete: any;

      pageDuplicate: any;

      pageEdit: any;

      pageNew: any;

      pageRename: any;

      pageSpawnPoints: any;

      pageStart: any;

      constructor(x: any, y: any, width: any, height: any);

      aboutToShow: (() => any) | any;

      create: (() => any) | any;

      getCurrentFocusForController: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      /** @noSelf */
      static getSandboxSettingsTable: () => any;
    }

    /** @customConstructor SpawnRegionsNameFilePanel:new */
    export class SpawnRegionsNameFilePanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      entryFile: any;

      entryName: any;

      joyfocus: any;

      joypadFocused: any;

      selectedItem: any;

      constructor(x: any, y: any, width: any);

      createChildren: (() => any) | any;

      onFileEntered: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDownInParent: ((button: any, joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onNameEntered: (() => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;
    }

    export abstract class DefaultServerSettings {
      static [id: string]: any;

      insertUnique: ((_table: any, value: any) => any) | any;

      setDefaultsFromSingleplayer: ((settings: any) => any) | any;

      setServerOptionValue: ((settings: any, option: any, _table: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerSettingsScreen {}
}
