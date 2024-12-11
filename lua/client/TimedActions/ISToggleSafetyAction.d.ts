/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleSafetyAction:new */
    export class ISToggleSafetyAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      isSafety: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleSafetyAction {}
}
