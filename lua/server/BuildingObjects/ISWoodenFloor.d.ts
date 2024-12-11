/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenFloor:new */
    export class ISWoodenFloor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      buildLow: any;

      floor: any;

      javaObject: any;

      sq: any;

      constructor(sprite: any, northSprite: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenFloor {}
}
