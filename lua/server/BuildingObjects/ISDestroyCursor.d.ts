/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      _isDoorFrame: ((object: any) => any) | any;

      _isDoorN: ((object: any) => any) | any;

      _isDoorW: ((object: any) => any) | any;

      _isDoorWallN: ((object: any) => any) | any;

      _isDoorWallW: ((object: any) => any) | any;

      _isWall: ((object: any) => any) | any;

      canDestroy: ((object: any) => any) | any;

      couldSeeOpposite: ((object: any, square: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getObjectList: (() => any) | any;

      isFloorAtTopOfStairs: ((object: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDestroyCursor {}
}
