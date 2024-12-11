/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fill(...__args: never[]): any;

      onMouseDoubleClickOpenObject(item: any, ...__args: never[]): any;

      onRightMouseDownObject(x: any, y: any, ...__args: never[]): any;

      onSourceMouseWheel(del: any, ...__args: never[]): any;

      restorePos(...__args: never[]): any;

      storePos(...__args: never[]): any;

      /** @noSelf */
      static onDataRead: (data: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDataWrite: (data: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWatch: (item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.ObjectViewer {}
}
