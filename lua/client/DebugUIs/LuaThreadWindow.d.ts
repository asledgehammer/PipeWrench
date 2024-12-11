/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor LuaThreadWindow:new */
    export class LuaThreadWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      callframeStack: any;

      locals: any;

      metaNodes: any;

      objectStack: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fill(...__args: never[]): any;

      onMouseDoubleClickCallframe(item: any, ...__args: never[]): any;

      onMouseDoubleClickMeta(item: any, ...__args: never[]): any;

      onMouseDoubleClickObject(item: any, ...__args: never[]): any;

      onResize(width: any, height: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.LuaThreadWindow {}
}
