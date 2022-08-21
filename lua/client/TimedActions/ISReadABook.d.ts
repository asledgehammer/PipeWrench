/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISReadABook:new */
    export class ISReadABook extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      ignoreHandsWounds: any;

      item: any;

      pageTimer: any;

      stats: any;

      constructor(character: any, item: any, time: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      /** @noSelf */
      static checkLevel: (character: any, item: any) => any;

      /** @noSelf */
      static checkMultiplier: (self: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISReadABook {}
}
