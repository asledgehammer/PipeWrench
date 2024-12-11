/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISSimpleFurniture:new */
    export class ISSimpleFurniture extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      buildLow: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(name: any, sprite: any, northSprite: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISSimpleFurniture {}
}
