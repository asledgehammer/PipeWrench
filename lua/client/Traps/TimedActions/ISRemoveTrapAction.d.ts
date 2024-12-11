/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Traps.TimedActions {
    /** @customConstructor ISRemoveTrapAction:new */
    export class ISRemoveTrapAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any, time: any);
    }
  }
  export namespace lua.client.Traps.TimedActions.ISRemoveTrapAction {}
}
