/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISCleanBloodCursor:new */
    export class ISCleanBloodCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      noNeedHammer: any;

      player: any;

      skipBuildAction: any;

      constructor(sprite: any, northSprite: any, character: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISCleanBloodCursor {}
}
