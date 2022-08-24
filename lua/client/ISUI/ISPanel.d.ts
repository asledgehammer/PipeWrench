/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      close: (() => any) | any;

      noBackground: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISPanel {}
}
