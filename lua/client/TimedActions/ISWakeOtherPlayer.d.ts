/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWakeOtherPlayer:new */
    export class ISWakeOtherPlayer extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      otherPlayer: any;

      constructor(character: any, other: any);
    }
  }
  export namespace lua.client.TimedActions.ISWakeOtherPlayer {}
}
