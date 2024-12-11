/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getClosestSquare(squares: any, ...__args: never[]): any;

      getFireObjects(square: any, ...__args: never[]): any;

      getSquares(x: any, y: any, z: any, ...__args: never[]): any;

      getTopLeftOfSquares(x: any, y: any, z: any, ...__args: never[]): any;

      isRunningAction(...__args: never[]): any;

      isValidArea(x: any, y: any, z: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.FireFighting.ISExtinguishCursor {}
}
