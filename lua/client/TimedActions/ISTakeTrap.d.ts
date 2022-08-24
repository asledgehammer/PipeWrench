/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeTrap:new */
    export class ISTakeTrap extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeTrap {}
}
