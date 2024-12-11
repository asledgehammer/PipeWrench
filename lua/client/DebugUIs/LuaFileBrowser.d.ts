/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor LuaFileBrowser:new */
    export class LuaFileBrowser extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      buttonReload: any;

      buttonReloadRow: any;

      fileList: any;

      lastText: any;

      textEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      fill(...__args: never[]): any;

      onButtonReload(...__args: never[]): any;

      onMouseDoubleClickFile(item: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateReloadButton(...__args: never[]): any;
    }

    /** @customConstructor LuaFileBrowserList:new */
    export class LuaFileBrowserList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;
    }
  }
  export namespace lua.client.DebugUIs.LuaFileBrowser {}
}
