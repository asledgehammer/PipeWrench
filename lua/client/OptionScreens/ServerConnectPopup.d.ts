/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      checkFields: (() => any) | any;

      create: (() => any) | any;

      instantiate: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      setServer: ((ip: any, port: any, passwordStr: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerConnectPopup {}
}
