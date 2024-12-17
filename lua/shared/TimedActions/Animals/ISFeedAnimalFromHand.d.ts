/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISFeedAnimalFromHand:new */
    export class ISFeedAnimalFromHand extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      food: any;

      sound: any;

      constructor(character: any, animal: any, food: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISFeedAnimalFromHand {}
}
