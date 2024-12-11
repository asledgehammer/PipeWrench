/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor StashDebug:new */
    export class StashDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      datas: any;

      no: any;

      reinitBtn: any;

      selectedStash: any;

      viewBtn: any;

      constructor(x: any, y: any, width: any, height: any);

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.StashDebug {}
}
