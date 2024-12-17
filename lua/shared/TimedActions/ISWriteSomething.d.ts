/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWriteSomething:new */
    export class ISWriteSomething extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      item: any;

      constructor(character: any, item: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      isBook(item: any, ...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISWriteSomething {}
}
