/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor LuaDebugger:new */
    export class LuaDebugger extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      threadPanel: any;

      constructor(x: any, y: any, width: any, height: any);

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.LuaDebugger {}
}
