/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISScrollBar:new */
    export class ISScrollBar extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      barheight: any;

      barwidth: any;

      barx: any;

      bary: any;

      borderColor: any;

      parent: any;

      pos: any;

      scrolling: any;

      vertical: any;

      constructor(parent: any, vertical: any);

      onMouseDown: ((x: any, y: any) => any) | any;

      refresh: (() => any) | any;

      updatePos: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISScrollBar {}
}
