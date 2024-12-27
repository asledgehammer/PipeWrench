/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISReadABook:new */
    export class ISReadABook extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      ignoreHandsWounds: any;

      isLiteratureRead: any;

      item: any;

      minutesPerPage: any;

      pageTimer: any;

      startPage: any;

      stats: any;

      constructor(character: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      isBook(item: any, ...__args: never[]): any;

      serverStart(...__args: never[]): any;

      /** @noSelf */
      static checkLevel: (character: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkMultiplier: (self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.TimedActions.ISReadABook {}
}
