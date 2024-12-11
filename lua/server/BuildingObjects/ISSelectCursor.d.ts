/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISSelectCursor:new */
    export class ISSelectCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static floorSprite: any;

      character: any;

      noNeedHammer: any;

      onSquareSelected: any;

      player: any;

      skipBuildAction: any;

      ui: any;

      constructor(character: any, ui: any, onSquareSelected: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISSelectCursor {}
}
