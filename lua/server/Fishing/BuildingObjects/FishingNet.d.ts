/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Fishing.BuildingObjects {
    /** @customConstructor fishingNet:new */
    export class fishingNet extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      player: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(player: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      /** @noSelf */
      static checkTrap: (player: any, trap: any, hours: any) => any;

      /** @noSelf */
      static doTimestamp: (net: any) => any;

      /** @noSelf */
      static remove: (net: any, player: any) => any;
    }
  }
  export namespace lua.server.Fishing.BuildingObjects.FishingNet {}
}
