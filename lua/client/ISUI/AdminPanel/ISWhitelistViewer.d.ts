/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISWhitelistViewer:new */
    export class ISWhitelistViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeView: any;

      buttonBorderColor: any;

      canModify: any;

      close: any;

      delete: any;

      modify: any;

      panel: any;

      refreshBtn: any;

      schema: any;

      constructor(x: any, y: any, width: any, height: any);

      closeSelf(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onActivateView(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onRemove(button: any, view: any, ...__args: never[]): any;

      refresh(...__args: never[]): any;

      refreshButtons(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static receiveDBSchema: (schema: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistViewer {}
}
