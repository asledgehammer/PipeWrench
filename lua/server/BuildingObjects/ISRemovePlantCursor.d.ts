/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISRemovePlantCursor:new */
    export class ISRemovePlantCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static floorSprite: any;

      character: any;

      isYButtonResetCursor: any;

      noNeedHammer: any;

      player: any;

      removeType: any;

      skipBuildAction: any;

      constructor(character: any, removeType: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getRemovableObject(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISRemovePlantCursor {}
}
