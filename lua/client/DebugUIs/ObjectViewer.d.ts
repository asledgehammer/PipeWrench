/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ObjectViewer:new */
    export class ObjectViewer extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      obj: any;

      objectView: any;

      sc: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any, obj: any);

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

      /** @noSelf */
      static onWatch: (item: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.ObjectViewer {}
}
