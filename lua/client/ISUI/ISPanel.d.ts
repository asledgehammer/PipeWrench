/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPanel:new */
    export class ISPanel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      downX: any;

      downY: any;

      mouseOver: any;

      moveWithMouse: any;

      moving: any;

      constructor(x: any, y: any, width: any, height: any);

      close(...__args: never[]): any;

      noBackground(...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISPanel {}
}
