/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddSheetRope:new */
    export class ISAddSheetRope extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      window: any;

      constructor(character: any, window: any);
    }
  }
  export namespace lua.client.TimedActions.ISAddSheetRope {}
}
