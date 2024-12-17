/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPaperCursor:new */
    export class ISPaperCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      character: any;

      currentSquare: any;

      newSprite: any;

      newSpriteSprite: any;

      noNeedHammer: any;

      objectIndex: any;

      paperType: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any, paperType: any, newSprite: any);

      _isDoorFrame(object: any, ...__args: never[]): any;

      _isWall(object: any, ...__args: never[]): any;

      canPaper(object: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getObjectList(...__args: never[]): any;

      hasItems(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPaperCursor {}
}
