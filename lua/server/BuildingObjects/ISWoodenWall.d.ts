/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenWall:new */
    export class ISWoodenWall extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      corner: any;

      javaObject: any;

      name: any;

      sq: any;

      constructor(sprite: any, northSprite: any, corner: any);

      addCorner: ((x: any, y: any, z: any, north: any) => any) | any;

      checkCorner: ((x: any, y: any, z: any, north: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getObjectIndex: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenWall {}
}
