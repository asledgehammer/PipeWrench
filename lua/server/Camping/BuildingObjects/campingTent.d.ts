/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Camping.BuildingObjects {
    /** @customConstructor campingTent:new */
    export class campingTent extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      character: any;

      noNeedHammer: any;

      tentSprites: any;

      constructor(character: any, tentSprites: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getSquare2: ((square: any, north: any) => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      isSquareFree: ((square: any) => any) | any;
    }
  }
  export namespace lua.server.Camping.BuildingObjects.campingTent {}
}
