/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISSleepInTentAction:new */
    export class ISSleepInTentAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      tent: any;

      constructor(character: any, tent: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISSleepInTentAction {}
}
