/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebuggerContextMenu:new */
    export class DebuggerContextMenu extends lua.client.ISUI.ISContextMenu {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.DebugUIs.DebuggerContextMenu {
    /** @noSelf */
    export const getDebuggerContextMenu: () => any;
  }
}
