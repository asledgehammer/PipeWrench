/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ConnectToServer:new */
    export class ConnectToServer extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      animOffset: any;

      arrowBG: any;

      arrowFG: any;

      backBtn: any;

      connecting: any;

      connectLabel: any;

      failMessage: any;

      isCoop: any;

      previousScreen: any;

      richText: any;

      serverName: any;

      serverName1: any;

      timerMultiplierAnim: any;

      title: any;

      userName: any;

      userName1: any;

      connect(
        previousScreen: any,
        serverName: any,
        userName: any,
        password: any,
        IP: any,
        localIP: any,
        port: any,
        serverPassword: any,
        useSteamRelay: any,
        ...__args: never[]
      ): any;

      connectCoop(previousScreen: any, serverSteamID: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      onBackButton(...__args: never[]): any;

      OnConnected(...__args: never[]): any;

      OnConnectFailed(message: any, detail: any, ...__args: never[]): any;

      OnConnectionStateChanged(state: any, message: any, arg: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onResize(width: any, height: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ConnectToServer {}
}
