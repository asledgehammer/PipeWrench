/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopOptionsScreen:new */
    export class CoopOptionsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      abortButton: any;

      accountNameEntry: any;

      backButton: any;

      deletePlayerButton: any;

      deleteWorldButton: any;

      itemheightoverride: any;

      javaObject: any;

      memoryComboBox: any;

      memoryToIndex: any;

      panel: any;

      richText: any;

      selected: any;

      serverStatus: any;

      settingsButton: any;

      settingsComboBox: any;

      softreset: any;

      softResetButton: any;

      startButton: any;

      uiStatus: any;

      worldVersion: any;

      constructor(x: any, y: any, width: any, height: any);

      aboutToShow: (() => any) | any;

      checkPlayerExists: (() => any) | any;

      checkWorldExists: (() => any) | any;

      checkWorldVersion: (() => any) | any;

      create: (() => any) | any;

      getPlayerSaveFolder: (() => any) | any;

      getServerSaveFolder: (() => any) | any;

      instantiate: (() => any) | any;

      loadOptions: (() => any) | any;

      onAbortButtonDown: ((button: any, x: any, y: any) => any) | any;

      onBackButtonDown: ((button: any, x: any, y: any) => any) | any;

      onDeletePlayer: (() => any) | any;

      onDeletePlayerStep2: ((button: any, joypadData: any) => any) | any;

      onDeleteWorld: (() => any) | any;

      onDeleteWorldStep2: ((button: any, joypadData: any) => any) | any;

      onEditSettings: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMemorySelected: (() => any) | any;

      onSettingsSelected: (() => any) | any;

      onSoftReset: (() => any) | any;

      onSoftResetStep2: ((button: any, joypadData: any) => any) | any;

      onStartButtonDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      saveOptions: (() => any) | any;

      /** @noSelf */
      static OnConnected: () => any;

      /** @noSelf */
      static OnConnectFailed: (message: any) => any;

      /** @noSelf */
      static OnConnectionStateChanged: (state: any, message: any) => any;

      /** @noSelf */
      static onCoopServerMessage: (tag: any, cookie: any, payload: any) => any;
    }

    /** @customConstructor CoopOptionsScreenPanel:new */
    export class CoopOptionsScreenPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      oldJoypadIndex: any;

      oldJoypadIndexY: any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;
    }

    export abstract class CoopConnection {
      static [id: string]: any;

      static memory: any;

      static servername: any;

      static serverPassword: any;

      static username: any;
    }
  }
  export namespace lua.client.OptionScreens.CoopOptionsScreen {}
}
