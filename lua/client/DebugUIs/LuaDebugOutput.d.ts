/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor LuaDebugOutput:new */
    export class LuaDebugOutput extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cat: any;

      outputListbox: any;

      constructor(x: any, y: any, width: any, height: any);

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      debug(text: any, ...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      error(text: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.LuaDebugOutput {}
}
