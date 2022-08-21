/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISChopTreeCursor:new */
    export class ISChopTreeCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static floorSprite: any;

      character: any;

      noNeedHammer: any;

      player: any;

      skipBuildAction: any;

      constructor(sprite: any, northSprite: any, character: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISChopTreeCursor {}
}
