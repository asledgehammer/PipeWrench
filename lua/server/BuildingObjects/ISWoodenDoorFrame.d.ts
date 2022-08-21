/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenDoorFrame:new */
    export class ISWoodenDoorFrame extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      corner: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any, corner: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenDoorFrame {}
}
