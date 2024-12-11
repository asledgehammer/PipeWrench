/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPauseModListUI:new */
    export class ISPauseModListUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      chatText: any;

      destroyOnClick: any;

      name: any;

      constructor(x: any, y: any, width: any, height: any);

      destroy(...__args: never[]): any;
    }

    export abstract class PauseBuggedModList {
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.ISPauseModListUI {}
}
