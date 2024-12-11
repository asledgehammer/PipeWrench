/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPadlockAction:new */
    export class ISPadlockAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      lock: any;

      padlock: any;

      pdata: any;

      thump: any;

      constructor(character: any, thump: any, padlock: any, pdata: any, lock: any);
    }
  }
  export namespace lua.client.TimedActions.ISPadlockAction {}
}
