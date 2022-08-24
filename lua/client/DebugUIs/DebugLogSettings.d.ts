/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugLogSettings:new */
    export class DebugLogSettings extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any, debugType: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugLogSettings {}
}
