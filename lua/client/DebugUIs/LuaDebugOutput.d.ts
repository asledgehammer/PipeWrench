/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor LuaDebugOutput:new */
    export class LuaDebugOutput extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cat: any;

      outputListbox: any;

      constructor(x: any, y: any, width: any, height: any);

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      debug: ((text: any) => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      error: ((text: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.LuaDebugOutput {}
}
