/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISToolTipInv:new */
    export class ISToolTipInv extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      anchorBottomLeft: any;

      followMouse: any;

      item: any;

      owner: any;

      tooltip: any;

      toolTipDone: any;

      constructor(item: any);

      adjustPositionToAvoidOverlap(avoidRect: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      overlaps(r1: any, r2: any, ...__args: never[]): any;

      placeAbove(r1: any, r2: any, ...__args: never[]): any;

      placeLeft(r1: any, r2: any, ...__args: never[]): any;

      placeRight(r1: any, r2: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setCharacter(chr: any, ...__args: never[]): any;

      setItem(item: any, ...__args: never[]): any;

      setOwner(ui: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISToolTipInv {}
}
