/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRipClothing:new */
    export class ISRipClothing extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isSheetRope: any;

      item: any;

      recipe: any;

      constructor(character: any, item: any, isSheetRope: any);
    }
  }
  export namespace lua.client.TimedActions.ISRipClothing {}
}
