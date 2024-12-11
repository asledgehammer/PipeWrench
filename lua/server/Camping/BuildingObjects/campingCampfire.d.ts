/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Camping.BuildingObjects {
    /** @customConstructor campingCampfire:new */
    export class campingCampfire extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      craftingBank: any;

      noNeedHammer: any;

      constructor(character: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      isSquareFree(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.Camping.BuildingObjects.campingCampfire {}
}
