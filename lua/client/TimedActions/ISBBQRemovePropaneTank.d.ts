/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQRemovePropaneTank:new */
    export class ISBBQRemovePropaneTank extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      sound: any;

      constructor(character: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQRemovePropaneTank {}
}
