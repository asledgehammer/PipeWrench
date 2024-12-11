/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQToggle:new */
    export class ISBBQToggle extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      constructor(character: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQToggle {}
}
