/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakeTrap:new */
    export class ISTakeTrap extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any, time: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakeTrap {}
}
