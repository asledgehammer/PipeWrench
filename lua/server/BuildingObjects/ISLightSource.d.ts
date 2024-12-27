/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISLightSource:new */
    export class ISLightSource extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      baseItem: any;

      character: any;

      fuel: any;

      javaObject: any;

      name: any;

      radius: any;

      sq: any;

      constructor(sprite: any, northSprite: any, character: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISLightSource {}
}
