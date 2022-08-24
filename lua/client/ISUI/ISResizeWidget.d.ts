/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISResizeWidget:new */
    export class ISResizeWidget extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backgroundColorMouseOver: any;

      resizing: any;

      target: any;

      yonly: any;

      constructor(x: any, y: any, width: any, height: any, resizeTarget: any, yonly: any);

      render: (() => any) | any;

      resize: ((dx: any, dy: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISResizeWidget {}
}
