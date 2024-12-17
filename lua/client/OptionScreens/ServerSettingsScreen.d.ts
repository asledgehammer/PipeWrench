/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor BaseServerSettingsPanel:new */
    export class BaseServerSettingsPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;
    }

    /** @customConstructor ServerSettingsScreen:new */
    export class ServerSettingsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      initialSelectedSettings: any;

      joyfocus: any;

      pageDelete: any;

      pageDuplicate: any;

      pageEdit: any;

      pageNew: any;

      pageRename: any;

      pageSpawnPoints: any;

      pageStart: any;

      prevScreen: any;

      constructor(x: any, y: any, width: any, height: any);

      aboutToShow(...__args: never[]): any;

      create(...__args: never[]): any;

      getCurrentFocusForController(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onResetLua(reason: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      /** @noSelf */
      static getSandboxSettingsTable: (...__args: never[]) => any;
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

      createChildren(...__args: never[]): any;

      onFileEntered(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDownInParent(button: any, joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onNameEntered(...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadFocused(focused: any, joypadData: any, ...__args: never[]): any;
    }

    /** @customConstructor undefined:new */
    export class undefined extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;
    }

    export abstract class DefaultServerSettings {
      static [id: string]: any;

      insertUnique: ((_table: any, value: any) => any) | any;

      setDefaultsFromSingleplayer: ((settings: any) => any) | any;

      setServerOptionValue: ((settings: any, option: any, _table: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerSettingsScreen {
    /** @noSelf */
    export const aboutToShow: () => any;

    /** @noSelf */
    export const create: () => any;

    /** @noSelf */
    export const onButtonCancel: () => any;

    /** @noSelf */
    export const onButtonMods: () => any;

    /** @noSelf */
    export const onButtonNext: () => any;

    /** @noSelf */
    export const render: () => any;
  }
}
