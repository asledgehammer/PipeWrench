/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISGiveWaterToAnimal:new */
    export class ISGiveWaterToAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      item: any;

      lastTimer: any;

      sound: any;

      timePerUse: any;

      timer: any;

      constructor(character: any, animal: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISGiveWaterToAnimal {}
}
