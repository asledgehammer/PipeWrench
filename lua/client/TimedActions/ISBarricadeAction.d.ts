/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBarricadeAction:new */
    export class ISBarricadeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isMetal: any;

      isMetalBar: any;

      isStarted: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, isMetal: any, isMetalBar: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBarricadeAction {}
}
