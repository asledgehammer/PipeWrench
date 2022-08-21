/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISToolTip:new */
    export class ISToolTip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      contextMenu: any;

      description: any;

      descriptionPanel: any;

      desiredX: any;

      desiredY: any;

      followMouse: any;

      footNote: any;

      maxLineWidth: any;

      name: any;

      owner: any;

      texture: any;

      constructor();

      adjustPositionToAvoidOverlap: ((avoidRect: any) => any) | any;

      doLayout: (() => any) | any;

      instantiate: (() => any) | any;

      layoutContents: ((x: any, y: any, myWidth: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      overlaps: ((r1: any, r2: any) => any) | any;

      placeAbove: ((r1: any, r2: any) => any) | any;

      placeLeft: ((r1: any, r2: any) => any) | any;

      placeRight: ((r1: any, r2: any) => any) | any;

      render: (() => any) | any;

      renderContents: (() => any) | any;

      reset: (() => any) | any;

      setContextMenu: ((contextMenu: any) => any) | any;

      setDesiredPosition: ((x: any, y: any) => any) | any;

      setName: ((name: any) => any) | any;

      setOwner: ((ui: any) => any) | any;

      setTexture: ((textureName: any) => any) | any;

      /** @noSelf */
      static GetFont: () => any;
    }
  }
  export namespace lua.client.ISUI.ISToolTip {}
}
