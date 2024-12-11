/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISDestroyCursor:new */
    export class ISDestroyCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      cornerCounter: any;

      currentObject: any;

      currentSquare: any;

      dismantle: any;

      floorSprite: any;

      noNeedHammer: any;

      objectIndex: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      sledgehammer: any;

      constructor(character: any, dismantle: any, sledgehammer: any);

      _isDoorFrame(object: any, ...__args: never[]): any;

      _isDoorN(object: any, ...__args: never[]): any;

      _isDoorW(object: any, ...__args: never[]): any;

      _isDoorWallN(object: any, ...__args: never[]): any;

      _isDoorWallW(object: any, ...__args: never[]): any;

      _isWall(object: any, ...__args: never[]): any;

      canDestroy(object: any, ...__args: never[]): any;

      couldSeeOpposite(object: any, square: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getObjectList(...__args: never[]): any;

      isFloorAtTopOfStairs(object: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDestroyCursor {}
}
