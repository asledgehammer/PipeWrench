/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class AdjacentFreeTileFinder {
      static [id: string]: any;

      /** @noSelf */
      static Find: (gridSquare: any, playerObj: any) => any;

      /** @noSelf */
      static FindClosest: (gridSquare: any, playerObj: any) => any;

      /** @noSelf */
      static FindEdge: (gridSquare: any, dir: any, playerObj: any, preferSameSquare: any) => any;

      /** @noSelf */
      static FindWall: (gridSquare: any, north: any, playerObj: any) => any;

      /** @noSelf */
      static FindWindowOrDoor: (gridSquare: any, window: any, playerObj: any) => any;

      /** @noSelf */
      static isTileOrAdjacent: (a: any, b: any) => any;

      /** @noSelf */
      static isTileOrAdjacent8: (a: any, b: any) => any;

      /** @noSelf */
      static privCanStand: (test: any) => any;

      /** @noSelf */
      static privGetNorth: (gridSquare: any, object: any) => any;

      /** @noSelf */
      static privTrySquare: (src: any, test: any) => any;

      /** @noSelf */
      static privTrySquareForWalls: (src: any, test: any) => any;

      /** @noSelf */
      static privTrySquareForWalls2: (src: any, x: any, y: any, z: any) => any;

      /** @noSelf */
      static privTrySquareWindow: (src: any, test: any) => any;
    }
  }
  export namespace lua.shared.Util.AdjacentFreeTileFinder {}
}
