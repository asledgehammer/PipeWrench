/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQInfoAction:new */
    export class ISBBQInfoAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      playerNum: any;

      constructor(character: any, bbq: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQInfoAction {}
}
