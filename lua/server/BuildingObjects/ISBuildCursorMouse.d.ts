/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBuildCursorMouse:new */
    export class ISBuildCursorMouse extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static spriteRender: any;

      character: any;

      isValid: any;

      noNeedHammer: any;

      onSquareSelected: any;

      player: any;

      previousSprite: any;

      skipBuildAction: any;

      sq: any;

      tooltip: any;

      constructor(character: any, onSquareSelected: any, isValid: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      hideTooltip(...__args: never[]): any;

      renderTooltip(...__args: never[]): any;

      /** @noSelf */
      static IsVisible: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildCursorMouse {}
}
