/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      constructor(name: any, sprite1: any, sprite2: any, northSprite1: any, northSprite2: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getSquare2: ((square: any, north: any) => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      setInfo: ((square: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDoubleTileFurniture {}
}
