/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISLightSource:new */
    export class ISLightSource extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any, player: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISLightSource {}
}
