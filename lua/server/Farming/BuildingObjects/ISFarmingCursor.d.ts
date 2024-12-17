/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Farming.BuildingObjects {
    /** @customConstructor ISFarmingCursor:new */
    export class ISFarmingCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      noNeedHammer: any;

      player: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getObjectList(...__args: never[]): any;
    }
  }
  export namespace lua.server.Farming.BuildingObjects.ISFarmingCursor {}
}
