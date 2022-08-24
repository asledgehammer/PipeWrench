/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.StashDebug {}
}
