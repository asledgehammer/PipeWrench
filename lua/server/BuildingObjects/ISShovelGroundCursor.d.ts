/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISShovelGroundCursor:new */
    export class ISShovelGroundCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      static floorSprite: any;

      character: any;

      groundType: any;

      noNeedHammer: any;

      player: any;

      skipBuildAction: any;

      constructor(sprite: any, northSprite: any, character: any, groundType: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getDirtGravelSand: ((square: any) => any) | any;

      getEmptyItem: (() => any) | any;

      /** @noSelf */
      static GetDirtGravelSand: (square: any) => any;

      /** @noSelf */
      static GetEmptyItem: (playerObj: any, groundType: any) => any;

      /** @noSelf */
      static GetEmptyItemCounts: (playerObj: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISShovelGroundCursor {}
}
