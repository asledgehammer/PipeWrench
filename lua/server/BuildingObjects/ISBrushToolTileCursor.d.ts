/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBrushToolTileCursor:new */
    export class ISBrushToolTileCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      isTileCursor: any;

      noNeedHammer: any;

      player: any;

      skipBuildAction: any;

      skipWalk2: any;

      spriteName: any;

      constructor(sprite: any, northSprite: any, character: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBrushToolTileCursor {}
}
