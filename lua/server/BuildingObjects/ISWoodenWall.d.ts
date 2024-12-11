/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenWall:new */
    export class ISWoodenWall extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      corner: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any, corner: any);

      addCorner(x: any, y: any, z: any, north: any, ...__args: never[]): any;

      checkCorner(x: any, y: any, z: any, north: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;

      getObjectIndex(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenWall {}
}
