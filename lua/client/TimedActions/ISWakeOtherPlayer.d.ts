/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWakeOtherPlayer:new */
    export class ISWakeOtherPlayer extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      otherPlayer: any;

      constructor(character: any, other: any);
    }
  }
  export namespace lua.client.TimedActions.ISWakeOtherPlayer {}
}
