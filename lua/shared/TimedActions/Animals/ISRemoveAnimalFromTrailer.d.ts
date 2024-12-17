/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISRemoveAnimalFromTrailer:new */
    export class ISRemoveAnimalFromTrailer extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      grab: any;

      vehicle: any;

      constructor(character: any, vehicle: any, animal: any, grab: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISRemoveAnimalFromTrailer {}
}
