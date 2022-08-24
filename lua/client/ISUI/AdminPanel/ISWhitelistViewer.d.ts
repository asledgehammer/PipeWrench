/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      closeSelf: (() => any) | any;

      createChildren: (() => any) | any;

      onActivateView: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemove: ((button: any, view: any) => any) | any;

      refresh: (() => any) | any;

      refreshButtons: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static receiveDBSchema: (schema: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistViewer {}
}
