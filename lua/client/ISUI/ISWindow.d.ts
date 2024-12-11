/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addToolbar(toolbar: any, height: any, ...__args: never[]): any;

      getClientBottom(...__args: never[]): any;

      getClientHeight(...__args: never[]): any;

      getClientLeft(...__args: never[]): any;

      getClientRight(...__args: never[]): any;

      getClientTop(...__args: never[]): any;

      getClientWidth(...__args: never[]): any;

      getNClientTop(...__args: never[]): any;

      getTotalToolbarHeight(...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      removeToolbar(toolbar: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISWindow {}
}
