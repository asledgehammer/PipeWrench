/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISResizableButton:new */
    export class ISResizableButton extends lua.client.ISUI.ISButton {
      [id: string]: any;
      static [id: string]: any;

      mouseOverResize: any;

      resizing: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        title: any,
        clicktarget: any,
        onclick: any,
        onmousedown: any,
        allowMouseUpProcessing: any,
      );

      resize(width: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISResizeableButton {}
}
