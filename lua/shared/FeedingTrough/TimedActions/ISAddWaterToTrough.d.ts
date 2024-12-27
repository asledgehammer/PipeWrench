/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.FeedingTrough.TimedActions {
    /** @customConstructor ISAddWaterToTrough:new */
    export class ISAddWaterToTrough extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      all: any;

      itemFrom: any;

      lastTimer: any;

      objectTo: any;

      sound: any;

      timePerUse: any;

      timer: any;

      constructor(character: any, objectTo: any, itemFrom: any, all: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      relaunch(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      stopSound(...__args: never[]): any;

      updateAddingWater(...__args: never[]): any;
    }
  }
  export namespace lua.shared.FeedingTrough.TimedActions.ISAddWaterToTrough {}
}
