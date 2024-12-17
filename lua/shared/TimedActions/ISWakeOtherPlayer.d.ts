/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWakeOtherPlayer:new */
    export class ISWakeOtherPlayer extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      otherPlayer: any;

      constructor(character: any, otherPlayer: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISWakeOtherPlayer {}
}
