/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Traps.TimedActions {
    /** @customConstructor ISCheckTrapAction:new */
    export class ISCheckTrapAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      trap: any;

      constructor(character: any, trap: any, time: any);
    }
  }
  export namespace lua.client.Traps.TimedActions.ISCheckTrapAction {}
}
