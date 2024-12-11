/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGrabCorpseAction:new */
    export class ISGrabCorpseAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      corpse: any;

      corpseBody: any;

      forceProgressBar: any;

      constructor(character: any, corpse: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISGrabCorpseAction {}
}
