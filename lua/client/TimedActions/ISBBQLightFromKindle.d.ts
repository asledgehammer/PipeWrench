/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQLightFromKindle:new */
    export class ISBBQLightFromKindle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      isOutdoorsMan: any;

      item: any;

      plank: any;

      sound: any;

      constructor(character: any, plank: any, stickOrBranch: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQLightFromKindle {}
}
