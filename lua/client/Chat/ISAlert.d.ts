/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Chat {
    /** @customConstructor ISAlert:new */
    export class ISAlert extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      servermsg: any;

      servermsgTimer: any;

      constructor(x: any, y: any, width: any, height: any);

      /** @noSelf */
      static getAlert: (message: any, tabID: any, ...__args: never[]) => any;

      /** @noSelf */
      static setupAlerts: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Chat.ISAlert {}
}
