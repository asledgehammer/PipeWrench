/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fishing.TimedActions {
    /** @customConstructor ISCheckFishingNetAction:new */
    export class ISCheckFishingNetAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hours: any;

      trap: any;

      constructor(player: any, trap: any, hours: any);
    }
  }
  export namespace lua.client.Fishing.TimedActions.ISCheckFishingNetAction {}
}
