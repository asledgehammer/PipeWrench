/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenContainer:new */
    export class ISWoodenContainer extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      buildLow: any;

      canBeLockedByPadlock: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenContainer {}
}
