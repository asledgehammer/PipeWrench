/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQLightFromLiterature:new */
    export class ISBBQLightFromLiterature extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQLightFromLiterature {}
}
