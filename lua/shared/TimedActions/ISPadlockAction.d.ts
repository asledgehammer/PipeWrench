/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPadlockAction:new */
    export class ISPadlockAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      lock: any;

      padlock: any;

      thump: any;

      constructor(character: any, thump: any, padlock: any, lock: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPadlockAction {}
}
