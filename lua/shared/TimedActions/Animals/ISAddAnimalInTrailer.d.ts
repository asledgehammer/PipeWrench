/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISAddAnimalInTrailer:new */
    export class ISAddAnimalInTrailer extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      fromHand: any;

      vehicle: any;

      constructor(character: any, vehicle: any, animal: any, fromHand: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISAddAnimalInTrailer {}
}
