/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISAnvil:new */
    export class ISAnvil extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      javaObject: any;

      name: any;

      noNeedHammer: any;

      sq: any;

      constructor(name: any, character: any, sprite: any, northSprite: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISAnvil {}
}
