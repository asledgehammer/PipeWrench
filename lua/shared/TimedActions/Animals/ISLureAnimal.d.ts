/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISLureAnimal:new */
    export class ISLureAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      item: any;

      lastTimer: any;

      luringTick: any;

      saidLine: any;

      saidLine2: any;

      timer: any;

      timerCheck: any;

      useProgressBar: any;

      constructor(character: any, animal: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      luredAnimal(animal: any, ...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISLureAnimal {}
}
