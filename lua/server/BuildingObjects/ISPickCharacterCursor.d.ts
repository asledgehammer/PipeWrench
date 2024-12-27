/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPickCharacterCursor:new */
    export class ISPickCharacterCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      currentSquare: any;

      noNeedHammer: any;

      objectIndex: any;

      player: any;

      skipBuildAction: any;

      squareX: any;

      squareY: any;

      squareZ: any;

      constructor(character: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      getHighlightedCharacter(square: any, ...__args: never[]): any;

      getObjectList(square: any, ...__args: never[]): any;

      isValidCharacter(chr: any, ...__args: never[]): any;

      onPickCharacter(chr: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPickCharacterCursor {}
}
