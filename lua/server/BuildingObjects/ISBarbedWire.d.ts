/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBarbedWire:new */
    export class ISBarbedWire extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getBarbedWire: ((square: any) => any) | any;

      getObjectIndex: ((square: any) => any) | any;

      getWoodenStake: ((square: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBarbedWire {}
}
