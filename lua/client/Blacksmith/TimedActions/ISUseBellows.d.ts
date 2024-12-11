/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISUseBellows:new */
    export class ISUseBellows extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bellows: any;

      furnace: any;

      constructor(furnace: any, bellows: any, character: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISUseBellows {}
}
