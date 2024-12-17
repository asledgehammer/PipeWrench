/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPadlockByCodeAction:new */
    export class ISPadlockByCodeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      code: any;

      lock: any;

      padlock: any;

      thump: any;

      constructor(character: any, thump: any, padlock: any, lock: any, code: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPadlockByCodeAction {}
}
