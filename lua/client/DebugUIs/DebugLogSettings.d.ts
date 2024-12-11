/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugLogSettings:new */
    export class DebugLogSettings extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, debugType: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugLogSettings {}
}
