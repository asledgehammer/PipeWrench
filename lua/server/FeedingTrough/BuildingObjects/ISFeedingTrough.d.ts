/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.FeedingTrough.BuildingObjects {
    /** @customConstructor ISFeedingTrough:new */
    export class ISFeedingTrough extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      def: any;

      doubleSprite: any;

      sprite2: any;

      sq2: any;

      troughSprite: any;

      constructor(character: any, def: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getSquare2(square: any, north: any, ...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      isSquareFree(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.FeedingTrough.BuildingObjects.ISFeedingTrough {}
}
