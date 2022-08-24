/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      hideTooltip: (() => any) | any;

      renderTooltip: (() => any) | any;

      /** @noSelf */
      static IsVisible: () => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildCursorMouse {}
}
