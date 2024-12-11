/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBarbedWire:new */
    export class ISBarbedWire extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getBarbedWire(square: any, ...__args: never[]): any;

      getObjectIndex(square: any, ...__args: never[]): any;

      getWoodenStake(square: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBarbedWire {}
}
