/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      connect:
        | ((
            previousScreen: any,
            serverName: any,
            userName: any,
            password: any,
            IP: any,
            localIP: any,
            port: any,
            serverPassword: any,
            useSteamRelay: any
          ) => any)
        | any;

      connectCoop: ((previousScreen: any, serverSteamID: any) => any) | any;

      create: (() => any) | any;

      onBackButton: (() => any) | any;

      OnConnected: (() => any) | any;

      OnConnectFailed: ((message: any, detail: any) => any) | any;

      OnConnectionStateChanged: ((state: any, message: any, arg: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onResize: ((width: any, height: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ConnectToServer {}
}
