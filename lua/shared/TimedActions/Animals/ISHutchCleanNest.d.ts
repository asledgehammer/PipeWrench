/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISHutchCleanNest:new */
    export class ISHutchCleanNest extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bleach: any;

      hutch: any;

      lastTimer: any;

      timePerDirt: any;

      timer: any;

      constructor(character: any, hutch: any, bleach: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISHutchCleanNest {}
}
