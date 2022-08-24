/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fill: (() => any) | any;

      onMouseDoubleClickCallframe: ((item: any) => any) | any;

      onMouseDoubleClickMeta: ((item: any) => any) | any;

      onMouseDoubleClickObject: ((item: any) => any) | any;

      onResize: ((width: any, height: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.LuaThreadWindow {}
}
