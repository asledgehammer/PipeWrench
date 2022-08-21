/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISWoodenStairs:new */
    export class ISWoodenStairs extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      northSprite2: any;

      northSprite3: any;

      pillar: any;

      pillarNorth: any;

      sprite2: any;

      sprite3: any;

      sq: any;

      constructor(
        sprite1: any,
        sprite2: any,
        sprite3: any,
        northSprite1: any,
        northSprite2: any,
        northSprite3: any,
        pillar: any,
        pillarNorth: any
      );

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      getSquare3Pos: ((square: any, north: any) => any) | any;

      getSquareTopPos: ((square: any, north: any) => any) | any;

      setInfo: ((square: any, level: any, north: any, sprite: any, luaobject: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenStairs {}
}
