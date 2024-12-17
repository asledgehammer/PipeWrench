/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISKillAnimal:new */
    export class ISKillAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      constructor(character: any, animal: any);

      complete(...__args: never[]): any;

      kill(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISKillAnimal {}
}
