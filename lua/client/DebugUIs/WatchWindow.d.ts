/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor WatchWindow:new */
    export class WatchWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      obj: any;

      objectView: any;

      objlist: any;

      sc: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any);

      addWatch: ((obj: any) => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fill: (() => any) | any;

      onMouseDoubleClickOpenObject: ((item: any) => any) | any;

      onRightMouseDownObject: ((x: any, y: any) => any) | any;

      onSourceMouseWheel: ((del: any) => any) | any;

      restorePos: (() => any) | any;

      storePos: (() => any) | any;

      /** @noSelf */
      static onDataRead: (data: any) => any;

      /** @noSelf */
      static onDataWrite: (data: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.WatchWindow {}
}
