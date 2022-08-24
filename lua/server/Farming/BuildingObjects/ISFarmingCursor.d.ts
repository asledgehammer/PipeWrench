/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Farming.BuildingObjects {
    /** @customConstructor ISFarmingCursor:new */
    export class ISFarmingCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      floorSprite: any;

      noNeedHammer: any;

      player: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getObjectList: (() => any) | any;
    }
  }
  export namespace lua.server.Farming.BuildingObjects.ISFarmingCursor {}
}
