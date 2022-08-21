/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISNaturalFloor:new */
    export class ISNaturalFloor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static floorSprite: any;

      actionAnim: any;

      character: any;

      craftingBank: any;

      floorType: any;

      item: any;

      itemType: any;

      javaObject: any;

      noNeedHammer: any;

      player: any;

      sq: any;

      constructor(sprite: any, northSprite: any, item: any, character: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getFloorType: ((item: any) => any) | any;

      /** @noSelf */
      static getFloorSpriteNames: (square: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISNaturalFloor {}
}
