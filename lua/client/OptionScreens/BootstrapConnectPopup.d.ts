/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      connect(host: any, port: any, serverPassword: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      onBackButton(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      OnSteamServerFailedToRespond2(host: any, port: any, ...__args: never[]): any;

      OnSteamServerResponded2(host: any, port: any, server2: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.BootstrapConnectPopup {}
}
