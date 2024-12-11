/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemovePatch:new */
    export class ISRemovePatch extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      clothing: any;

      needle: any;

      part: any;

      constructor(character: any, clothing: any, part: any, needle: any);

      /** @noSelf */
      static chanceToGetPatchBack: (character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISRemovePatch {}
}
