/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      adjustPositionToAvoidOverlap: ((avoidRect: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      overlaps: ((r1: any, r2: any) => any) | any;

      placeAbove: ((r1: any, r2: any) => any) | any;

      placeLeft: ((r1: any, r2: any) => any) | any;

      placeRight: ((r1: any, r2: any) => any) | any;

      render: (() => any) | any;

      setCharacter: ((chr: any) => any) | any;

      setItem: ((item: any) => any) | any;

      setOwner: ((ui: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISToolTipInv {}
}
