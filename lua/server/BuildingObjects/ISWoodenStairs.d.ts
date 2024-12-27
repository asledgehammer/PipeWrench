/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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
        sprite: any,
        sprite2: any,
        sprite3: any,
        northSprite: any,
        northSprite2: any,
        northSprite3: any,
        pillar: any,
        pillarNorth: any,
      );

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      getSquare3Pos(square: any, north: any, ...__args: never[]): any;

      getSquareTopPos(square: any, north: any, ...__args: never[]): any;

      setInfo(square: any, level: any, north: any, sprite: any, luaobject: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISWoodenStairs {}
}
