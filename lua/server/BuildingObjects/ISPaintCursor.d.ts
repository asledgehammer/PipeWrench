/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPaintCursor:new */
    export class ISPaintCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      args: any;

      character: any;

      currentSquare: any;

      floorSprite: any;

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

      _isDoorFrame: ((object: any) => any) | any;

      _isWall: ((object: any) => any) | any;

      canPaint: ((object: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getObjectList: (() => any) | any;

      hasItems: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPaintCursor {}
}
