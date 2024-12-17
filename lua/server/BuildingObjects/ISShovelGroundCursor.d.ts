/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISShovelGroundCursor:new */
    export class ISShovelGroundCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      groundType: any;

      noNeedHammer: any;

      player: any;

      skipBuildAction: any;

      constructor(sprite: any, northSprite: any, character: any, groundType: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getDirtGravelSand(square: any, ...__args: never[]): any;

      getEmptyItem(...__args: never[]): any;

      /** @noSelf */
      static GetDirtGravelSand: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetEmptyItem: (playerObj: any, groundType: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetEmptyItemCounts: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISShovelGroundCursor {}
}
