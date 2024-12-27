/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      hitTest(x: any, y: any, ...__args: never[]): any;

      isPointOverThumb(x: any, y: any, ...__args: never[]): any;

      onClickArrowDown(...__args: never[]): any;

      onClickArrowLeft(...__args: never[]): any;

      onClickArrowRight(...__args: never[]): any;

      onClickArrowUp(...__args: never[]): any;

      onClickTrackDown(y: any, ...__args: never[]): any;

      onClickTrackLeft(x: any, ...__args: never[]): any;

      onClickTrackRight(x: any, ...__args: never[]): any;

      onClickTrackUp(y: any, ...__args: never[]): any;

      onMouseDoubleClick(x: any, y: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      refresh(...__args: never[]): any;

      updatePos(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISScrollBar {}
}
