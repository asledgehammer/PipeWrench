/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBarricadeAction:new */
    export class ISBarricadeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isMetal: any;

      isMetalBar: any;

      isStarted: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, isMetal: any, isMetalBar: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBarricadeAction {}
}
