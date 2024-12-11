/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ServerConnectPopup:new */
    export class ServerConnectPopup extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      cancelBtn: any;

      connectBtn: any;

      connectTypeEntry: any;

      connectTypeLabel: any;

      ip: any;

      itemheightoverride: any;

      javaObject: any;

      NoLabel: any;

      passwordEntry: any;

      passwordLabel: any;

      port: any;

      serverPasswordEntry: any;

      usernameEntry: any;

      usernameLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      checkFields(...__args: never[]): any;

      create(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      setServer(ip: any, port: any, passwordStr: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ServerConnectPopup {}
}
