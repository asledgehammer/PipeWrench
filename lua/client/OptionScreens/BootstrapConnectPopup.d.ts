/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor BootstrapConnectPopup:new */
    export class BootstrapConnectPopup extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backBtn: any;

      connecting: any;

      connectLabel: any;

      host: any;

      port: any;

      serverPassword: any;

      connect: ((host: any, port: any, serverPassword: any) => any) | any;

      create: (() => any) | any;

      onBackButton: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      OnSteamServerFailedToRespond2: ((host: any, port: any) => any) | any;

      OnSteamServerResponded2: ((host: any, port: any, server2: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.BootstrapConnectPopup {}
}
