/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISWindow:new */
    export class ISWindow extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      hasClose: any;

      mDownX: any;

      mDownY: any;

      resizing: any;

      title: any;

      toolbars: any;

      constructor(title: any, x: any, y: any, width: any, height: any);

      addToolbar: ((toolbar: any, height: any) => any) | any;

      getClientBottom: (() => any) | any;

      getClientHeight: (() => any) | any;

      getClientLeft: (() => any) | any;

      getClientRight: (() => any) | any;

      getClientTop: (() => any) | any;

      getClientWidth: (() => any) | any;

      getNClientTop: (() => any) | any;

      getTotalToolbarHeight: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      removeToolbar: ((toolbar: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISWindow {}
}
