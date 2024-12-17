/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISAnimalPickMateCursor:new */
    export class ISAnimalPickMateCursor extends lua.server.BuildingObjects.ISPickCharacterCursor {
      [id: string]: any;
      static [id: string]: any;

      dragNilAfterPlace: any;

      femaleAnimal: any;

      constructor(character: any, femaleAnimal: any);

      getAPrompt(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISAnimalPickMateCursor {}
}
