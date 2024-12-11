/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor MPDebugger:new */
    export class MPDebugger extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.MPDebugger {}
}
