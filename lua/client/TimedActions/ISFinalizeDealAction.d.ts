/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFinalizeDealAction:new */
    export class ISFinalizeDealAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
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
