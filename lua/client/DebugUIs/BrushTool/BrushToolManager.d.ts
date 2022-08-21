/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.BrushTool {
    /** @customConstructor BrushToolManager:new */
    export class BrushToolManager extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      character: any;

      chooseTile: any;

      controlFire: any;

      help: any;

      constructor(x: any, y: any, width: any, height: any, character: any);

      onClick: ((button: any) => any) | any;

      /** @noSelf */
      static openPanel: (playerObj: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.BrushTool.BrushToolManager {}
}
