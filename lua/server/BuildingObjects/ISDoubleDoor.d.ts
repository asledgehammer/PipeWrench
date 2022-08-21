/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISDoubleDoor:new */
    export class ISDoubleDoor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      name: any;

      northSprite2: any;

      northSprite3: any;

      northSprite4: any;

      sprite2: any;

      sprite3: any;

      sprite4: any;

      sq: any;

      constructor(sprite: any, spriteIndex: any);

      addDoorPart: ((x: any, y: any, z: any, north: any, sprite: any, index: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      getSquare3Pos: ((square: any, north: any) => any) | any;

      getSquare4Pos: ((square: any, north: any) => any) | any;

      overrideModData: ((spriteIndex: any) => any) | any;

      partExists: ((square: any, index: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDoubleDoor {}
}
