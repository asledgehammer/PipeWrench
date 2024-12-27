/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      spriteIndex: any;

      spriteOriginal: any;

      sq: any;

      constructor(spriteOriginal: any, spriteIndex: any);

      addDoorPart(x: any, y: any, z: any, north: any, sprite: any, index: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHealth(...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      getSquare3Pos(square: any, north: any, ...__args: never[]): any;

      getSquare4Pos(square: any, north: any, ...__args: never[]): any;

      overrideModData(spriteIndex: any, ...__args: never[]): any;

      partExists(square: any, index: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISDoubleDoor {}
}
