/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      fill: (() => any) | any;

      onButtonReload: (() => any) | any;

      onMouseDoubleClickFile: ((item: any) => any) | any;

      update: (() => any) | any;

      updateReloadButton: (() => any) | any;
    }

    /** @customConstructor LuaFileBrowserList:new */
    export class LuaFileBrowserList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;
    }
  }
  export namespace lua.client.DebugUIs.LuaFileBrowser {}
}
