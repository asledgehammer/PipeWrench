/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCleanBlood:new */
    export class ISCleanBlood extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      sound: any;

      square: any;

      constructor(character: any, square: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISCleanBlood {}
}
