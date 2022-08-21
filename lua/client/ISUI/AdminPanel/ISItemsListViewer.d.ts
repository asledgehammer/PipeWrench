/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemsListViewer:new */
    export class ISItemsListViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      items: any;

      _module_: any;

      ok: any;

      panel: any;

      playerSelect: any;

      constructor(x: any, y: any, width: any, height: any);

      initList: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onSelectPlayer: (() => any) | any;

      setKeyboardFocus: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemsListViewer {}
}
