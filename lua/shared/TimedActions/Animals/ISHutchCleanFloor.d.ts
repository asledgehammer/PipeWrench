/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISHutchCleanFloor:new */
    export class ISHutchCleanFloor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bleach: any;

      hutch: any;

      lastTimer: any;

      mop: any;

      playerInv: any;

      sound: any;

      timePerDirt: any;

      timer: any;

      water: any;

      constructor(character: any, hutch: any, water: any, mop: any, bleach: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      clean(...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISHutchCleanFloor {}
}
