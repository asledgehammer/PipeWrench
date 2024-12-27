/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISHutch:new */
    export class ISHutch extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      def: any;

      constructor(character: any, def: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getSquare2(square: any, north: any, ...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      isSquareFree(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISHutch {}
}
