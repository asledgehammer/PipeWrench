/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBurnCorpseAction:new */
    export class ISBurnCorpseAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      corpse: any;

      lighter: any;

      petrol: any;

      constructor(character: any, corpse: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBurnCorpseAction {}
}
