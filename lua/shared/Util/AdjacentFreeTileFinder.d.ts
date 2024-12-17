/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class AdjacentFreeTileFinder {
      static [id: string]: any;

      /** @noSelf */
      static Find: (gridSquare: any, playerObj: any, excludeList: any, ...__args: never[]) => any;

      /** @noSelf */
      static FindClosest: (gridSquare: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static FindEdge: (gridSquare: any, dir: any, playerObj: any, preferSameSquare: any, ...__args: never[]) => any;

      /** @noSelf */
      static FindWall: (gridSquare: any, north: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static FindWindowOrDoor: (gridSquare: any, window: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static isTileOrAdjacent: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static isTileOrAdjacent8: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static privCanStand: (test: any, ...__args: never[]) => any;

      /** @noSelf */
      static privGetNorth: (gridSquare: any, object: any, ...__args: never[]) => any;

      /** @noSelf */
      static privTrySquare: (src: any, test: any, excludeList: any, ...__args: never[]) => any;

      /** @noSelf */
      static privTrySquareForWalls: (src: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static privTrySquareForWalls2: (src: any, x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static privTrySquareWindow: (src: any, test: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Util.AdjacentFreeTileFinder {}
}
