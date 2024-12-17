/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISDoubleTileFurniture:new */
    export class ISDoubleTileFurniture extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      buildLow: any;

      name: any;

      northSprite2: any;

      sprite2: any;

      sq: any;

      constructor(name: any, sprite: any, sprite2: any, northSprite: any, northSprite2: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;

      getSquare2(square: any, north: any, ...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      setInfo(square: any, north: any, sprite: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDoubleTileFurniture {}
}
