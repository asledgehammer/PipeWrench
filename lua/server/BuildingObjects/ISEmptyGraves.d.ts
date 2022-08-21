/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISEmptyGraves:new */
    export class ISEmptyGraves extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      craftingBank: any;

      equipBothHandItem: any;

      ignoreNorth: any;

      javaObject: any;

      maxTime: any;

      noNeedHammer: any;

      northSprite2: any;

      sprite2: any;

      sq: any;

      constructor(sprite1: any, sprite2: any, northSprite1: any, northSprite2: any, shovel: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getSquare2: ((square: any, north: any) => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      setInfo: ((square: any, north: any, sprite: any, cell: any, spriteType: any) => any) | any;

      /** @noSelf */
      static canDigHere: (worldObjects: any) => any;

      /** @noSelf */
      static getMaxCorpses: (grave: any) => any;

      /** @noSelf */
      static isGraveFilledIn: (grave: any) => any;

      /** @noSelf */
      static isGraveFullOfCorpses: (grave: any) => any;

      /** @noSelf */
      static shovelledFloorCanDig: (square: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISEmptyGraves {}
}
