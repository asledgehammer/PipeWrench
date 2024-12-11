/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISClimbSheetRopeAction:new */
    export class ISClimbSheetRopeAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      down: any;

      constructor(character: any, down: any);
    }
  }
  export namespace lua.client.TimedActions.ISClimbSheetRopeAction {}
}
