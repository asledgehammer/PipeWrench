/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.FeedingTrough.TimedActions {
    /** @customConstructor ISEmptyWaterInTrough:new */
    export class ISEmptyWaterInTrough extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      objectTo: any;

      sound: any;

      constructor(character: any, objectTo: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.FeedingTrough.TimedActions.ISEmptyWaterInTrough {}
}
