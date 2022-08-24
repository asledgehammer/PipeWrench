/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBSFurnace {}
}
