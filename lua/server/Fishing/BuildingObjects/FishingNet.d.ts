/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Fishing.BuildingObjects {
    /** @customConstructor fishingNet:new */
    export class fishingNet extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      item: any;

      player: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any, item: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      /** @noSelf */
      static checkTrap: (player: any, trap: any, hours: any, ...__args: never[]) => any;

      /** @noSelf */
      static doTimestamp: (net: any, ...__args: never[]) => any;

      /** @noSelf */
      static remove: (net: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static setBait: (net: any, baitForce: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateBait: (net: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Fishing.BuildingObjects.FishingNet {}
}
