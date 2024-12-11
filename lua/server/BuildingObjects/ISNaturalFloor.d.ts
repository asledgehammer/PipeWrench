/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getFloorType(item: any, ...__args: never[]): any;

      /** @noSelf */
      static getFloorSpriteNames: (square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISNaturalFloor {}
}
