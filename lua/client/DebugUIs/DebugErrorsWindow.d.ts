/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugErrorsWindow:new */
    export class DebugErrorsWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      errorCount: any;

      textBox: any;

      constructor(x: any, y: any, width: any, height: any);

      refresh: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugErrorsWindow {}
}
