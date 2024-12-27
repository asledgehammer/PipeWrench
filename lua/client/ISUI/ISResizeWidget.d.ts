/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISResizeWidget:new */
    export class ISResizeWidget extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backgroundColorMouseOver: any;

      resizeFunction: any;

      resizing: any;

      target: any;

      yonly: any;

      constructor(x: any, y: any, width: any, height: any, resizeTarget: any, yonly: any);

      render(...__args: never[]): any;

      resize(dx: any, dy: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISResizeWidget {}
}
