/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFinalizeDealAction:new */
    export class ISFinalizeDealAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      itemsToGive: any;

      itemsToReceive: any;

      otherPlayer: any;

      constructor(player: any, otherPlayer: any, itemsToGive: any, itemsToReceive: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFinalizeDealAction {}
}
