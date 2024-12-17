/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISGetAnimalBones:new */
    export class ISGetAnimalBones extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      body: any;

      constructor(character: any, body: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISGetAnimalBones {}
}
