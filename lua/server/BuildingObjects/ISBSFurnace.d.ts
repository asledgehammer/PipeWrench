/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBSFurnace:new */
    export class ISBSFurnace extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      litSprite: any;

      name: any;

      noNeedHammer: any;

      sq: any;

      constructor(name: any, sprite: any, litSprite: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBSFurnace {}
}
