/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBuildRampCursor:new */
    export class ISBuildRampCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      which: any;

      constructor(character: any, which: any);

      addRampObject(x: any, y: any, z: any, spriteName: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      removeRampObjects(x: any, y: any, z: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildRampCursor {}
}
