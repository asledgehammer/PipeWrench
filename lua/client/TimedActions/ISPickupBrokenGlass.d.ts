/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPickupBrokenGlass:new */
    export class ISPickupBrokenGlass extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      glass: any;

      square: any;

      constructor(character: any, glass: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISPickupBrokenGlass {}
}
