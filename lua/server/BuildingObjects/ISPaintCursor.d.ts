/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPaintCursor:new */
    export class ISPaintCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      args: any;

      character: any;

      currentSquare: any;

      noNeedHammer: any;

      objectIndex: any;

      plasterSprite: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      signSprite: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any, action: any, args: any);

      _isDoorFrame(object: any, ...__args: never[]): any;

      _isWall(object: any, ...__args: never[]): any;

      canPaint(object: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getObjectList(...__args: never[]): any;

      hasItems(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPaintCursor {}
}
