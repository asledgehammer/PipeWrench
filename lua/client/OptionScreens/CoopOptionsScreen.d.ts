/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      aboutToShow(...__args: never[]): any;

      checkPlayerExists(...__args: never[]): any;

      checkWorldExists(...__args: never[]): any;

      checkWorldVersion(...__args: never[]): any;

      create(...__args: never[]): any;

      getPlayerSaveFolder(...__args: never[]): any;

      getServerSaveFolder(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      loadOptions(...__args: never[]): any;

      onAbortButtonDown(button: any, x: any, y: any, ...__args: never[]): any;

      onBackButtonDown(button: any, x: any, y: any, ...__args: never[]): any;

      onDeletePlayer(...__args: never[]): any;

      onDeletePlayerStep2(button: any, joypadData: any, ...__args: never[]): any;

      onDeleteWorld(...__args: never[]): any;

      onDeleteWorldStep2(button: any, joypadData: any, ...__args: never[]): any;

      onEditSettings(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMemorySelected(...__args: never[]): any;

      onSettingsSelected(...__args: never[]): any;

      onSoftReset(...__args: never[]): any;

      onSoftResetStep2(button: any, joypadData: any, ...__args: never[]): any;

      onStartButtonDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      saveOptions(...__args: never[]): any;

      /** @noSelf */
      static OnConnected: (...__args: never[]) => any;

      /** @noSelf */
      static OnConnectFailed: (message: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnConnectionStateChanged: (state: any, message: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCoopServerMessage: (tag: any, cookie: any, payload: any, ...__args: never[]) => any;
    }

    /** @customConstructor CoopOptionsScreenPanel:new */
    export class CoopOptionsScreenPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      oldJoypadIndex: any;

      oldJoypadIndexY: any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;
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
