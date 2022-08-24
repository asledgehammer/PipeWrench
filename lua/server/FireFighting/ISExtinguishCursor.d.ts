/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.FireFighting {
    /** @customConstructor ISExtinguishCursor:new */
    export class ISExtinguishCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static _colorInfo: any;

      character: any;

      extinguisher: any;

      noNeedHammer: any;

      player: any;

      renderFloorHelper: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any, extinguisher: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getClosestSquare: ((squares: any) => any) | any;

      getFireObjects: ((square: any) => any) | any;

      getSquares: ((x: any, y: any, z: any) => any) | any;

      getTopLeftOfSquares: ((x: any, y: any, z: any) => any) | any;

      isRunningAction: (() => any) | any;

      isValidArea: ((x: any, y: any, z: any) => any) | any;
    }
  }
  export namespace lua.server.FireFighting.ISExtinguishCursor {}
}
