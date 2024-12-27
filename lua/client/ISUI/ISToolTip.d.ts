/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISToolTip:new */
    export class ISToolTip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      contextMenu: any;

      defaultMyWidth: any;

      description: any;

      descriptionPanel: any;

      desiredX: any;

      desiredY: any;

      followMouse: any;

      footNote: any;

      maxLineWidth: any;

      name: any;

      nameMarginX: any;

      owner: any;

      texture: any;

      constructor();

      adjustPositionToAvoidOverlap(avoidRect: any, ...__args: never[]): any;

      doLayout(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      layoutContents(x: any, y: any, myWidth: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      overlaps(r1: any, r2: any, ...__args: never[]): any;

      placeAbove(r1: any, r2: any, ...__args: never[]): any;

      placeLeft(r1: any, r2: any, ...__args: never[]): any;

      placeRight(r1: any, r2: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderContents(...__args: never[]): any;

      reset(...__args: never[]): any;

      setContextMenu(contextMenu: any, ...__args: never[]): any;

      setDesiredPosition(x: any, y: any, ...__args: never[]): any;

      setName(name: any, ...__args: never[]): any;

      setOwner(ui: any, ...__args: never[]): any;

      setTexture(textureName: any, ...__args: never[]): any;

      setTextureDirectly(texture: any, ...__args: never[]): any;

      /** @noSelf */
      static GetFont: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISToolTip {}
}
