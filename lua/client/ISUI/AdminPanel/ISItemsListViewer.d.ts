/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      initList(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSelectPlayer(...__args: never[]): any;

      setKeyboardFocus(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemsListViewer {}
}
